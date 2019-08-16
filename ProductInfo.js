import React, { useState, useRef, useContext, useEffect, useDebugValue, useLayoutEffect } from 'react'
import SizeSwitch from './SizeSwitch'
import useVisibility from './useVisibility'

export default function ProductInfo ({name, composition, price, backgroundImage, activeProduct, type }){
        
    const productInfo = useRef ()

    const [isLarge, setIsLarge] = useState (false)
    const buttonRef             = useRef ()
    const isVisible             = useVisibility (buttonRef, { partial: true })
  
    return (
        <div className='product-info' ref={productInfo}>
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
                <button ref={buttonRef}>
                    <span>ЗАКАЗАТЬ</span>
                    <div className={'highlight ' + (isVisible ? '' : 'invisible')}></div>
                    <div className={'highlight2 ' + (isVisible ? '' : 'invisible')}></div>
                </button>
            </div>
        </div>
    )
}