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



export default function Overlay ({ setOverlayVisible, activeProduct, setActiveProduct  }) {

    const productListEl   = useRef ()
    const productListSize = useComponentSize (productListEl)
    const [dropdownMenuVisible, setDropdownMenuVisible] = useState(false)

    const products = {
        pizzas:  pizzaData,
        noodles: noodlesData,
        salads:  saladsData,
    }

    const productLabels = { pizzas: 'Пицца', noodles: 'Лапша', salads: 'Салаты' }

    return <div className='product-overlay'>
                <div className='overlay-menu'>
                    <div className='back' onClick={() => setOverlayVisible (false)} >⇐ Назад</div>
                    
                    {/* {dropdownMenuVisible
                        ? <div className='choose-type' onClick={() => dropdownMenuVisible ? setDropdownMenuVisible(false) : setDropdownMenuVisible(true)}>
                              {Object.entries(productLabels).map(([k, v]) => <div onClick={() => setActiveProduct(k)}>{v}</div>)}
                          </div>
                        : <div className='' onClick={() => setDropdownMenuVisible(true)}>{productLabels[activeProduct]}</div>} */}

                    {/* {dropdownMenuVisible
                        ? <div className='choose-type' onClick={() => dropdownMenuVisible ? setDropdownMenuVisible(false) : setDropdownMenuVisible(true)}>
                              {Object.entries(productLabels).map(([k, v]) => <div onClick={() => setActiveProduct(k)}>{v}</div>)}
                          </div>
                        : <div className='' onClick={() => setDropdownMenuVisible(true)}>{productLabels[activeProduct]}</div>} */}
                    
                    {/*<div className={classList ({ 'size-switch': 1, 'active': isLarge, 'clicked': isClicked })} onClick={onClick}></div> */}   

                    {dropdownMenuVisible
                        ? <div className={classList ({'choose-type': 1, 'active': dropdownMenuVisible})} onClick={() => setDropdownMenuVisible(!dropdownMenuVisible) }>
                              <ul>
                                  <li>{productLabels[activeProduct]}</li>
                                  {
                                      Object.entries(productLabels).map(([k, v]) =>
                                            v !== productLabels[activeProduct]
                                                ? <li onClick={() => setActiveProduct(k)}>{v}</li>
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
                            products[activeProduct].map((p, i, list) => <li key={p.name} style={{height: productListSize.height / list.length}}>{p.name}</li>)
                        }
                    </ul>
                </div>

            
                <div className='product-info-panel'>
                    {products[activeProduct].map(p => <ProductInfo key={p.name} {...p} activeProduct={activeProduct}/>)}
                </div>

                {/* <div className='noodles-info-panel'>
                    {noodlesData.filter(n => n.type !== 'decoration').map(n => <NoodlesInfo key={n.name} {...n} />)}
                </div> */}
                
            </div>
}