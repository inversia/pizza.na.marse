import React, { useState, useEffect } from 'react'
import pizzaData from './pizzaData'
import Pizza from './Pizza'
import PizzaInfo from './PizzaInfo'
import Menu from './Menu'
import SelectionPanel from './SelectionPanel'
import Radar from './Radar'
import Carousel from './Carousel'

export default function App () {
    
    const [pizzaOverlayVisible, setPizzaOverlayVisible] = useState (false)
    const [pizzaTypeSelected,   setPizzaTypeSelected]   = useState ('mix')
    const [selectedPizzas,      setSelectedPizzas]      = useState ({}) // { }

    return <div class={'app ' + (pizzaTypeSelected || '')}>
            <Menu />
            <SelectionPanel type={pizzaTypeSelected} onSelect={ type => setPizzaTypeSelected (type) }/>
            <Radar />

            <div className={'pizza-overlay' + (pizzaOverlayVisible ? ' visible' : '')}>
                {pizzaData.map(p => <PizzaInfo key={p.name} {...p} />)}
            </div>

            <div className='pizzas'>
                {pizzaData.map(p => <Pizza checked={selectedPizzas[p.name] || false}
                                           key={p.name} {...p}
                                           onClick={ () => setSelectedPizzas ({ ...selectedPizzas, [p.name]: !selectedPizzas[p.name] }) }/>)}
            </div>

            <div className='pizza-button'>
                <div className='hint'></div>
                <div className='order'></div>
            </div>

            <div className="salads">
                <Carousel />
            </div>
        </div>
}