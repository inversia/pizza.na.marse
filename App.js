import React, { useState, useCallback, useLayoutEffect, useEffect, useRef } from 'react'
import useComponentSize from '@rehooks/component-size'
import pizzaData from './pizzaData'
import saladsData from './saladsData'
import Pizza from './Pizza'
import Menu from './Menu'
import SelectionPanel from './SelectionPanel'
import Radar from './Radar'
import Carousel from './Carousel'
import PizzaOverlay from './PizzaOverlay'
import Noodles from './Noodles';
import MenuMobile from './MenuMobile';
import SizeSwitch from './SizeSwitch';

export default function App () {
    
    const [pizzaOverlayVisible, setPizzaOverlayVisible] = useState (false)
    const [pizzaTypeSelected,   setPizzaTypeSelected]   = useState (undefined)
    const [selectedPizzas,      setSelectedPizzas]      = useState ({})

    const isMix = pizzaTypeSelected === 'mix'

    const pizzaDataEl = useRef ()
    
    const { width } = useComponentSize (pizzaDataEl)

    const layoutMode = width < 501 ? 'mobile' : 'desktop'
    const isMobile   = layoutMode === 'mobile'

    return <div className={'app ' + (pizzaTypeSelected || '') + ' ' + layoutMode}>
           <div className='cosmos-zone-one-wrapper'>
                <PizzaOverlay pizzaOverlayVisible={pizzaOverlayVisible} setPizzaOverlayVisible={setPizzaOverlayVisible} />
                
                {isMobile ? <MenuMobile type={pizzaTypeSelected} onSelect={ type => setPizzaTypeSelected (type === pizzaTypeSelected ? undefined : type) }/> : <Menu />}

                {!isMobile && <SelectionPanel type={pizzaTypeSelected} onSelect={ type => setPizzaTypeSelected (type === pizzaTypeSelected ? undefined : type) }/> }
                
                <Radar />

                <div ref={pizzaDataEl} className='pizzas'>
                    {pizzaData.map(p => <Pizza checked={selectedPizzas[p.name] || false}
                                            key={p.name}
                                            {...p}
                                            layoutMode={layoutMode}
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
            </div>

            <div className='cosmos-zone-two-wrapper'>
                <div className='salads-carousel-wrapper'>
                    <h1>Внеземные салаты</h1>
                    <Carousel perspectiveFactor='3.37' className='salads'>
                        { saladsData.map (salad => (
                                <>
                                    <div className='pic' style={{backgroundImage: `url(${salad.img})` }} />
                                    <div className='title'>{salad.name}</div>
                                </>
                        )) }
                    </Carousel>
                </div> 
            </div>
            <div className='noodles-wrapper'>
                <Noodles />
            </div>
            </div>
}