import React, { useRef } from 'react'
import pizzaData from './pizzaData'
import noodlesData from './noodlesData'
import PizzaInfo from './PizzaInfo'
import NoodlesInfo from './NoodlesInfo'
import ProductInfo from './ProductInfo'
import useComponentSize from '@rehooks/component-size'


export default function Overlay ({ setOverlayVisible, activeProduct  }) {

    const productListEl   = useRef ()
    const productListSize = useComponentSize (productListEl)

    const products = {
        pizzas: pizzaData,
        noodles: noodlesData
    }

    return <div className='product-overlay'>
                <div className='product-choose-panel'>
                    <button onClick={() => setOverlayVisible (false)}>закрыть</button>
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