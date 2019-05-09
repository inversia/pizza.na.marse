import React from 'react'

export default function PizzaInfo ({name, composition, price, img}){
    return (
        <div className='pizza-info'>
            <img className='pizza-image' style={{backgroundImage: 'url(' + img + ')'}} />
            <h1>{name}</h1>
            <h2>{price}</h2>
            <p>{composition}</p>
            <button>+</button>
        </div>
    )

}