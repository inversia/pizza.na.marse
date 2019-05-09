import React, { useState, useEffect } from 'react'
import pizzaData from './pizzaData'
import Pizza from './Pizza'
import Menu from './Menu'
import SelectionPanel from './SelectionPanel'
import Radar from './Radar'
import Carousel from './Carousel'
import PizzaOverlay from './PizzaOverlay'

export default function App () {
    
    const [pizzaOverlayVisible, setPizzaOverlayVisible] = useState (true)
    const [pizzaTypeSelected,   setPizzaTypeSelected]   = useState (undefined)
    const [selectedPizzas,      setSelectedPizzas]      = useState ({})

    const isMix = pizzaTypeSelected === 'mix'

    return <div class={'app ' + (pizzaTypeSelected || '')}>

            <PizzaOverlay pizzaOverlayVisible={pizzaOverlayVisible} />
            <Menu />
            <SelectionPanel type={pizzaTypeSelected} onSelect={ type => setPizzaTypeSelected (type === pizzaTypeSelected ? undefined : type) }/>
            <Radar />

            <div className='pizzas'>
                {pizzaData.map(p => <Pizza checked={selectedPizzas[p.name] || false}
                                           key={p.name} {...p}
                                           onClick={ () => {
                                                if (isMix) {
                                                    setSelectedPizzas ({ ...selectedPizzas, [p.name]: !selectedPizzas[p.name] })
                                                } else {
                                                    alert ('Окно заказа: выбрали пиццу ' + p.name)
                                                }
                                           } }/>)}
            </div>

            <div className='pizza-button' style={isMix ? { bottom: 0, opacity: 1 } : { bottom: 'calc(-1*var(--height))', opacity: 0 }}>
                <div className='hint'>
                    Выберите 2 понравившиеся пиццы, кликнув на них
                </div>
                <div className='order'></div>
            </div>

            <div className="salads">
                <Carousel />
            </div>
        </div>
}