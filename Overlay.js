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

const log = x => (console.log (x), x)

const noDecoration = items => items.filter (p => p.itemType !== 'decoration')

export default function Overlay ({ setOverlayVisible, activeProduct, setActiveProduct}) {

    const productListEl   = useRef ()
    const productListSize = useComponentSize (productListEl)
    const [dropdownMenuVisible, setDropdownMenuVisible] = useState(false)
    const [fillingType, setFillingType] = useState(undefined)

    const products = {
        pizzas:  pizzaData,
        noodles: noodlesData,
        salads:  saladsData,
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

                    <div className='choose-taste'>Выбрать начинку</div>
                    <div className='bucket'>Корзина</div>
                </div>

                <div className='product-choose-panel'>
                    <ul ref={productListEl} className='product-list'>
                        {
                            noDecoration (products[activeProduct]).map ((p, i, list) => <li key={p.name} style={{ height: Math.min (window.innerWidth / 20, log (productListSize.height / list.length)) + 'px' }}>{p.name}</li>)
                        }
                    </ul>
                </div>
                
                <div className='product-info-panel'>
                    {noDecoration (products[activeProduct]).map(p => <ProductInfo key={p.name} {...p} activeProduct={activeProduct}/>)}
                </div>
            </div>
}