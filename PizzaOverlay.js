import React, { useRef } from 'react'
import pizzaData from './pizzaData'
import PizzaInfo from './PizzaInfo'
import useComponentSize from '@rehooks/component-size'

export default function PizzaOverlay ({ pizzaOverlayVisible, setPizzaOverlayVisible }) {

    const pizzaListEl   = useRef ()
    const pizzaListSize = useComponentSize (pizzaListEl)

    return <div className={'pizza-overlay' + (pizzaOverlayVisible ? ' visible' : '')}>
                <div className='pizza-choose-panel'>
                    <button onClick={() => setPizzaOverlayVisible (false)}>закрыть</button>
                    <ul ref={pizzaListEl} className='pizza-list'>
                        {
                            pizzaData.map(p => <li key={p.name} style={{height: pizzaListSize.height / pizzaData.length}}>{p.name}</li>)
                        }
                    </ul>
                </div>

            
                <div className='pizza-info-panel'>
                    {pizzaData.map(p => <PizzaInfo key={p.name} {...p} />)}
                </div>
                
            </div>
}