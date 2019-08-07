import React, { useRef, useState } from 'react'
import pizzaData from './pizzaData'
import noodlesData from './noodlesData'
import PizzaInfo from './PizzaInfo'
import NoodlesInfo from './NoodlesInfo'
import ProductInfo from './ProductInfo'
import useComponentSize from '@rehooks/component-size'
import './Overlay.css'
import saladsData from './saladsData';


export default function Overlay ({ setOverlayVisible, activeProduct, setActiveProduct  }) {

    const productListEl   = useRef ()
    const productListSize = useComponentSize (productListEl)
    const [dropdownMenuVisible, setDropdownMenuVisible] = useState(false)

    const products = {
        pizzas:  pizzaData,
        noodles: noodlesData,
        salads:  saladsData,
    }

    const productLabels = { pizzas: 'ПИЦЦЫ', noodles: 'ЛАПША', salads: 'САЛАТЫ' }

    return <div className='product-overlay'>
                <div className='overlay-menu'>
                    <div className='back' onClick={() => setOverlayVisible (false)} >⇐</div>
                    
                    {dropdownMenuVisible
                        ? <div className='choose-type' onClick={() => dropdownMenuVisible ? setDropdownMenuVisible(false) : setDropdownMenuVisible(true)}>
                              {Object.entries(productLabels).map(([k, v]) => <div onClick={() => setActiveProduct(k)}>{v}</div>)}
                          </div>
                        : <div className='' onClick={() => setDropdownMenuVisible(true)}>{productLabels[activeProduct]}</div>}
                    <div className='choose-taste'>Выбрать тип начинки</div>
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