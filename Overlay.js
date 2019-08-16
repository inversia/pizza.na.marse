import React, { useRef, useState } from 'react'
import pizzaData from './pizzaData'
import noodlesData from './noodlesData'
import PizzaInfo from './PizzaInfo'
import NoodlesInfo from './NoodlesInfo'
import ProductInfo from './ProductInfo'
import useComponentSize from '@rehooks/component-size'
import './Overlay.css'
import saladsData from './saladsData';
import { useKeyPress } from 'react-use';
import { classList } from './util'
import ScrollableElContext from './ScrollableElContext'

const log = x => (console.log (x), x)

const noDecoration = items => items.filter (p => p.itemType !== 'decoration')

export default function Overlay ({ setOverlayVisible, activeProduct, setActiveProduct}) {

    const productListEl      = useRef ()
    const productInfoPanelEl = useRef ()
    const productListSize    = useComponentSize (productListEl)
    const [dropdownMenuVisible, setDropdownMenuVisible] = useState(false)
    const [dropdownFillingMenuVisible, setDropdownFillingMenuVisible] = useState(false)
    const [fillingType, setFillingType] = useState(undefined)

    const products = {
        pizzas:  pizzaData,
        noodles: noodlesData,
        salads:  saladsData,
    }

    const fillings = {
        meat: 'Мясное',
        veg: 'Вегетарианское',
        fish: 'Морепродукты',
        mix: 'Микс всех видов'
    }

    const productLabels = { pizzas: 'Пицца', noodles: 'Лапша', salads: 'Салаты' }

    return <div className='product-overlay'>
                <div className='overlay-menu'>
                    <div className='back' onClick={() => setOverlayVisible (false)} >⇐ Назад</div>  

                    {dropdownMenuVisible
                        ? <div className={classList ({'choose-type': 1, 'active': dropdownMenuVisible})} onClick={() => setDropdownMenuVisible(!dropdownMenuVisible) }>
                              <ul>
                                  <li style={{background: 'transparent'}}>{productLabels[activeProduct]}</li>
                                  {
                                      Object.entries(productLabels).map(([k, v]) =>
                                            v !== productLabels[activeProduct]
                                                ? <li key={k} className='pair' onClick={() => setActiveProduct(k)}>{v}</li>
                                                : undefined)
                                  }
                              </ul>
                          </div>
                        : <li className='' onClick={() => setDropdownMenuVisible(true)}>{productLabels[activeProduct]}</li>
                    }

                    {dropdownFillingMenuVisible 
                        ? <div className={classList ({'choose-taste': 1, 'active': dropdownFillingMenuVisible})} onClick={() => setDropdownFillingMenuVisible(!dropdownFillingMenuVisible)} >
                            <ul>
                                <li onClick={() => setFillingType('meat')}>Мясное</li>
                                <li onClick={() => setFillingType('veg') }>Вегетарианское</li>
                                <li onClick={() => setFillingType('fish')}>Морепродукты</li>
                                <li onClick={() => setFillingType(undefined) }>Все виды</li>
                            </ul>
                        </div>
                        : <div className='choose-taste' onClick={() => setDropdownFillingMenuVisible(true)}>{fillingType ? fillings[fillingType] : 'Выбрать начинку'}</div>
                    }
                    
                    
                    <div className='bucket'>Корзина</div>
                </div>

                <div className='product-choose-panel'>
                    <ul ref={productListEl} className='product-list'>
                        {noDecoration (products[activeProduct]).map ((p, i, list) => <li key={p.name} style={{ height: Math.min (window.innerWidth / 20, log (productListSize.height / list.length)) + 'px' }}>{p.name}</li>)}
                    </ul>
                </div>
                
                <div className='product-info-panel'>
                    <ScrollableElContext.Provider value='product-info-panel'>
                        {noDecoration (products[activeProduct]).filter(p => fillingType ? p.type === fillingType : p).map(p => <ProductInfo key={p.name} {...p} activeProduct={activeProduct}/>)}
                    </ScrollableElContext.Provider>
                </div>
            </div>
}