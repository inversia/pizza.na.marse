import React, { useState, useRef, useDebugValue } from 'react'
import SizeSwitch from './SizeSwitch'
import useVisibility from 'react-use-visibility'

export default function PizzaInfo ({name, composition, price, backgroundImage }){
        
    const [isLarge, setIsLarge] = useState (false)
    const pizzaInfoRef = useRef ()
    const buttonRef = useRef ()
    const isVisible = useVisibility (buttonRef.current, {
        partial: true,
        scrollableEl: pizzaInfoRef.current && pizzaInfoRef.current.parentElement
    })

    return (
        <div className='product-info' ref={pizzaInfoRef}>
            <div className='left-side'>
                <img className='product-image' style={{backgroundImage}} />
            </div>
            <div className='right-side'>
                <div className='name'>{name}</div>
                <div className='size'><SizeSwitch isLarge={isLarge} setIsLarge={setIsLarge} /></div>
                <div className='price'>{price[Number (isLarge)]}</div>
                <ul>
                    {composition.map(name => <li key={name}>{name}</li>)}
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