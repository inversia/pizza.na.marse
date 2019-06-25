import React from 'react'
import SizeSwitch from './SizeSwitch'

export default function PizzaInfo ({name, composition, price, img, isLarge}){
        
    return (
        <div className='pizza-info'>
            <div className='left-side'>
                <img className='pizza-image' style={{backgroundImage: 'url(' + img + ')'}} />
            </div>
            <div className='right-side'>
                <div className='name'>{name}</div>
                <div className='size'><SizeSwitch /></div>
                <div className='price'>{price}</div>
                <ul>
                    {composition.map(name => <li key={name}>{name}</li>)}
                </ul>
                <button></button>
            </div>
        </div>
    )
}