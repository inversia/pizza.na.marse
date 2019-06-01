import React from 'react'

export default function Pizza ({ checked = false, onClick, layout, layoutMode, type, fontSize, img, id, name, price, composition, animationDelay }) {
  
    const { position, size } = layout[layoutMode]

    return  <div className={`pizza ${type} ${checked ? 'checked' : ''}`}
                 onClick={onClick}
                 style={{
                    left: position[0],
                    top:  position[1],
                    height: size + 'vw',
                    width:  size + 'vw',
                    animationDelay: animationDelay,
                }}>
                <h1 style={{ fontSize: Math.round(size * 0.12) + 'vw' }}>{name} </h1>
                <h2 style={{ fontSize: Math.round(size * 0.12) + 'vw' }}>{price}</h2>
                <img src={img}/>
            </div>
}