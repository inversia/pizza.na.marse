import React, {useRef} from 'react'
import useVisibility from 'react-use-visibility'

export default function Pizza ({ checked = false, onClick, layout, layoutMode, type, fontSize, img, id, name, price, composition, animationDelay }) {
  
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
                <img src={img}/>
            </div>
}