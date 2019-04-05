import React from 'react'

export default function PizzaInfo ({name, composition, price}){
    return (
        <div className='pizza-info'>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <p>{composition}</p>
            <button>+</button>
        </div>
    )

}