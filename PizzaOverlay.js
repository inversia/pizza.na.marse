import React from 'react'
import pizzaData from './pizzaData'
import PizzaInfo from './PizzaInfo'
import PizzaList from './PizzaList'

export default function PizzaOverlay ({ pizzaOverlayVisible }) {

    return <div className={'pizza-overlay' + (pizzaOverlayVisible ? ' visible' : '')}>
                <div className='pizza-choose-panel'>
                    <button>X</button>
                    <div className='pizza-list'>{pizzaData.map(pi => <PizzaList key={pi.name} {...pi} />)}</div>
                </div>
                <div className='pizza-info-panel'>
                    {pizzaData.map(p => <PizzaInfo key={p.name} {...p} />)}
                </div>
                
            </div>
}