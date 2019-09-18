import React, { useRef, useContext } from 'react'
import useVisibility from 'react-use-visibility'
import { LayoutModeContext } from './LayoutModeContext'

export default function Pizza ({ checked = false, onClick, layout, type, fontSize, img, id, name, price, composition, animationDelay, backgroundImage }) {
  
    const { layoutMode } = useContext (LayoutModeContext)
    
    const { position, size } = layout[layoutMode]
    const pizzaRef = useRef ()
    const isVisible = useVisibility (pizzaRef.current, {
        partial: true,
    })

    return  <div className={`pizza ${type} ${checked ? 'checked' : ''}` + (isVisible ? '' : 'invisible')}
                 onClick={onClick}
                 style={{
                    left: position[0],
                    top:  position[1],
                    height: size + 'vw',
                    width:  size + 'vw',
                    animationDelay: animationDelay,
                 }}
                 ref={pizzaRef}>
                <h1 style={{ fontSize: Math.round(size * 0.12) + 'vw' }}>{name} </h1>
                <h2 style={{ fontSize: Math.round(size * 0.12) + 'vw' }}>{price}</h2>
                <div className='image' style={{backgroundImage}}/>
            </div>
}