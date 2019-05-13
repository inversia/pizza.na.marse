import React from 'react'
import pizzaData from './pizzaData'

export default function PizzaInfo ({name, composition, price, img}){
        
    return (
        <div className='pizza-info'>
            <div className='left-side'>
                <img className='pizza-image' style={{backgroundImage: 'url(' + img + ')'}} />
            </div>
            <div className='right-side'>
                <h1>{name}</h1>
                <h2>{price}</h2>
                <ul>
                    {composition.map(name => <li key={name}>{name}</li>)}
                </ul>
                <button>Добавить</button>
            </div>
        </div>
    )
}