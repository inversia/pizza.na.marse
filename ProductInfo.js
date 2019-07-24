import React, { useState, useRef, useDebugValue } from 'react'
import SizeSwitch from './SizeSwitch'
import useVisibility from 'react-use-visibility'

export default function ProductInfo ({name, composition, price, backgroundImage, activeProduct, type }){
        
    const [isLarge, setIsLarge] = useState (false)
    const productInfoRef        = useRef ()
    const buttonRef             = useRef ()
    const isVisible             = useVisibility (buttonRef.current, {
        partial: true,
        scrollableEl: productInfoRef.current && productInfoRef.current.parentElement
    })

    return (
        type !== 'decoration' && <div className='product-info' ref={productInfoRef}>
            <div className='left-side'>
                <img className='product-image' style={{backgroundImage}} />
            </div>
            <div className='right-side'>
                <div className='name'>{name}</div>
                
                {activeProduct === 'pizzas' && <div className='size'><SizeSwitch isLarge={isLarge} setIsLarge={setIsLarge} /></div>}
                
                <div className='price'>{activeProduct === 'pizzas' ? price[Number (isLarge)] : price}</div>
                
                <ul>
                    {composition.map(ingridient => <li key={name}>{ingridient}</li>)}
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