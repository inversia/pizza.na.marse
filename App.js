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
import Noodles from './Noodles'
import MenuMobile from './MenuMobile'
import noodlesData from './noodlesData'


export default function App () {
    
    const [pizzaOverlayVisible, setPizzaOverlayVisible] = useState (false)
    const [pizzaTypeSelected,   setPizzaTypeSelected]   = useState (undefined)
    const [selectedPizzas,      setSelectedPizzas]      = useState ({})
    const [currentNoodles,      setCurrentNoodles]      = useState ('лапша2')

    const isMix = pizzaTypeSelected === 'mix'

    const pizzaDataEl = useRef ()
    
    const { width } = useComponentSize (pizzaDataEl)

    const layoutMode = width < 501 ? 'mobile' : 'desktop'
    const isMobile   = layoutMode === 'mobile'

    const content = <>

        <div className='cosmos-zone-one-wrapper'>
            
            {isMobile ? <MenuMobile type={pizzaTypeSelected} onSelect={ type => setPizzaTypeSelected (type === pizzaTypeSelected ? undefined : type) }/> : <Menu />}

            {!isMobile && <SelectionPanel type={pizzaTypeSelected} onSelect={ type => setPizzaTypeSelected (type === pizzaTypeSelected ? undefined : type) }/> }
            
            <Radar />

            <div ref={pizzaDataEl} className='pizzas'>
                {pizzaData.map(p => <Pizza checked={selectedPizzas[p.name] || false}
                                        key={p.name}
                                        {...p}
                                        price={p.price[1]}
                                        layoutMode={layoutMode}
                                        onClick={ () => {
                                                if (isMix) {
                                                    setSelectedPizzas ({ ...selectedPizzas, [p.name]: !selectedPizzas[p.name] })
                                                } else {
                                                    //alert ('Окно заказа: выбрали пиццу ' + p.name)
                                                    setPizzaOverlayVisible (true)
                                                }
                                            }
                                        } />
                                )
                }
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
            <h1>Космическая лапша</h1>
            { noodlesData.map (noodles => (<Noodles {...noodles} 
                                                key={noodles.name} 
                                                onClick={() => {
                                                    if(noodles.type !== "decoration") {setCurrentNoodles(noodles.name)}
                                                }
                                            }/>))} 
            <h1>{currentNoodles}</h1>                            
        </div>
    </>

    return <div className={('app ' + (pizzaTypeSelected || '') + ' ' + layoutMode)}>

            {pizzaOverlayVisible
                ? <PizzaOverlay pizzaOverlayVisible={pizzaOverlayVisible} setPizzaOverlayVisible={setPizzaOverlayVisible} />
                : content}
        </div>
}