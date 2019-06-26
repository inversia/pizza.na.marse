import React, { useState } from 'react'
import SizeSwitch from './SizeSwitch'

export default function PizzaInfo ({name, composition, price, img }){
        
    const [isLarge, setIsLarge] = useState (false)

    return (
        <div className='pizza-info'>
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
                <button>
                    <span>ЗАКАЗАТЬ</span>
                    <div className='highlight'></div>
                    <div className='highlight2'></div>
                </button>
            </div>
        </div>
    )
}