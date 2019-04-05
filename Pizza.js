import React from 'react'

export default function Pizza ({ position, size, fontSize, img, id, name, price, composition, animationDelay }) {
    
    return  <div className='pizza'
                 style={{
                    transform: `translate(${position.join (',')})`,
                    height: size + 'vh',
                    width: size + 'vh',
                }}>
                <h1 style={{ fontSize: Math.round(size * 1.49) }}>{name}</h1>
                <h2 style={{ fontSize: Math.round(size * 1.09) }}>{price}</h2>
                <img src={img} />
            </div>
}