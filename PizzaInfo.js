import React, { useState, useRef, useDebugValue } from 'react'
import SizeSwitch from './SizeSwitch'
import useVisibility from 'react-use-visibility'

export default function PizzaInfo ({name, composition, price, img }){
        
    const [isLarge, setIsLarge] = useState (false)
    const pizzaInfoRef = useRef ()
    const buttonRef = useRef ()
    const isVisible = useVisibility (buttonRef.current, {
        partial: true,
        scrollableEl: pizzaInfoRef.current && pizzaInfoRef.current.parentElement
    })

    return (
        <div className='pizza-info' ref={pizzaInfoRef}>
            <div className='left-side'>
                <img className='pizza-image' style={{backgroundImage: 'url(' + img + ')'}} />
            </div>
            <div className='right-side'>
                <div className='name'>{name}</div>
                <div className='size'><SizeSwitch isLarge={isLarge} setIsLarge={setIsLarge} /></div>
                <div className='price'>{price[Number (isLarge)]}</div>
                <ul>
                    {composition.map(name => <li key={name}>{name}</li>)}
                </ul>
                <button ref={buttonRef}>
                    <span>{isVisible ? 'видно' : 'не видно'}</span>
                    <div className={'highlight ' + (isVisible ? 'ololo' : 'invisible')}></div>
                    <div className={'highlight2 ' + (isVisible ? 'ololo' : 'invisible')}></div>
                </button>
            </div>
        </div>
    )
}