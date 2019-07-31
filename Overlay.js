import React, { useRef } from 'react'
import pizzaData from './pizzaData'
import noodlesData from './noodlesData'
import PizzaInfo from './PizzaInfo'
import NoodlesInfo from './NoodlesInfo'
import ProductInfo from './ProductInfo'
import useComponentSize from '@rehooks/component-size'
import './Overlay.css'


export default function Overlay ({ setOverlayVisible, activeProduct, setActiveProduct  }) {

    const productListEl   = useRef ()
    const productListSize = useComponentSize (productListEl)

    const products = {
        pizzas: pizzaData,
        noodles: noodlesData
    }

    return <div className='product-overlay'>
                <div className='overlay-menu'>
                    <div className='back' onClick={() => setOverlayVisible (false)} >⇐</div>
                    <div className='choose-type'>
                        <div className='' onClick={() => setActiveProduct('pizzas')}>ПИЦЦА</div>
                        <div className='' onClick={() => setActiveProduct('noodles')}>ЛАПША</div>
                        <div className='' onClick={() => setActiveProduct('salads')}>САЛАТЫ</div>
                    </div>
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