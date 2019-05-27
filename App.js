import React, { useState, useEffect } from 'react'
import pizzaData from './pizzaData'
import saladsData from './saladsData'
import Pizza from './Pizza'
import Menu from './Menu'
import SelectionPanel from './SelectionPanel'
import Radar from './Radar'
import Carousel from './Carousel'
import PizzaOverlay from './PizzaOverlay'
import Noodles from './Noodles';

export default function App () {
    
    const [pizzaOverlayVisible, setPizzaOverlayVisible] = useState (false)
    const [pizzaTypeSelected,   setPizzaTypeSelected]   = useState (undefined)
    const [selectedPizzas,      setSelectedPizzas]      = useState ({})

    const isMix = pizzaTypeSelected === 'mix'

    return <div className={'app ' + (pizzaTypeSelected || '')}>

            <PizzaOverlay pizzaOverlayVisible={pizzaOverlayVisible} setPizzaOverlayVisible={setPizzaOverlayVisible} />
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
                                                    //alert ('Окно заказа: выбрали пиццу ' + p.name)
                                                    setPizzaOverlayVisible (true)
                                                }
                                           } }/>)}
            </div>

            <div className='pizza-button' style={isMix ? { bottom: 0, opacity: 1 } : { bottom: 'calc(-1*var(--height))', opacity: 0 }}>
                <div className='hint'>
                    Выберите 2 понравившиеся пиццы, кликнув на них
                </div>
                <div className='order'></div>
            </div>

            <div className='salads-carousel-wrapper'>
                <h1>Внеземные салаты</h1>
                <Carousel perspectiveFactor='0.47'>
                    { saladsData.map((salad, i) => (<div>
                                                        <div className='salad-item' key={i} style={{backgroundImage: `url(${salad.img})` }} />
                                                        <h2>{salad.name}</h2>
                                                    </div>))
                    }
                </Carousel>
            </div> 

            <div className='noodles-wrapper'>
                <Noodles />
            </div>
            </div>
}