import React, { useState, useRef, useContext, useEffect, useDebugValue, useLayoutEffect } from 'react'
import SizeSwitch from './SizeSwitch'
import useVisibility from './useVisibility'
import { CartContext } from './CartContext'

export default function ProductInfo ({name, composition, price, backgroundImage, activeProduct, type }){

    const [isLarge, setIsLarge] = useState (false)
    const buttonRef             = useRef ()
    const isVisible             = useVisibility (buttonRef, { partial: true })

    const { cartItems, addToCart } = useContext (CartContext)

    return (
        <div className='product-info'>
            <div className='left-side'>
                <img className='product-image' style={{backgroundImage}} />
            </div>
            <div className='right-side'>
                <div className='name'>{name}</div>
                
                {activeProduct === 'pizzas' && <div className='size'><SizeSwitch isLarge={isLarge} setIsLarge={setIsLarge} /></div>}
                
                <div className='price'>{activeProduct === 'pizzas' ? price[Number (isLarge)] : price}</div>
                
                <ul>
                    {composition.map((ingridient, i) => <li key={i}>{ingridient}</li>)}
                </ul>
                <button ref={buttonRef} onClick={() => addToCart ({ name, isLarge, backgroundImage })}>      {/* не передаю ли я BgImg в пустоту?*/}
                    <span>ЗАКАЗАТЬ</span>
                    <div className={'highlight ' + (isVisible ? '' : 'invisible')}></div>
                    <div className={'highlight2 ' + (isVisible ? '' : 'invisible')}></div>
                </button>
            </div>
        </div>
    )
}