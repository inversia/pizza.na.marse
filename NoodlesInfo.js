import React, { useState, useRef, useDebugValue } from 'react'
import useVisibility from 'react-use-visibility'

export default function NoodlesInfo ({name, composition, price, backgroundImage }){
        
    const noodlesInfoRef = useRef ()
    const buttonRef = useRef ()
    const isVisible = useVisibility (buttonRef.current, {
        partial: true,
        scrollableEl: noodlesInfoRef.current && noodlesInfoRef.current.parentElement
    })

    return (
        <div className='pizza-info' ref={noodlesInfoRef}>
            <div className='left-side'>
                <img className='pizza-image' style={{backgroundImage}} />
            </div>
            <div className='right-side'>
                <div className='name'>{name}</div>
                <div className='price'>{price}</div>
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