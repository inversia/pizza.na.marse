import React, { useState, useCallback, useLayoutEffect, useEffect, useRef } from 'react'
import useComponentSize from '@rehooks/component-size'
import pizzaData from './pizzaData'
import saladsData from './saladsData'
import Pizza from './Pizza'
import Menu from './Menu'
import SelectionPanel from './SelectionPanel'
import Radar from './Radar'
import Carousel from './Carousel'
import Overlay from './Overlay'
import Noodles from './Noodles'
import MenuMobile from './MenuMobile'
import noodlesData from './noodlesData'
import { useRoutes, A } from 'hookrouter'
import AboutContent from './AboutContent'


export default function App () {
    
    const [overlayVisible, setOverlayVisible]           = useState (false)
    const [pizzaTypeSelected,   setPizzaTypeSelected]   = useState (undefined)
    const [selectedPizzas,      setSelectedPizzas]      = useState ({})
    const [currentNoodles,      setCurrentNoodles]      = useState ('лапша2')
    const [activeProduct, setActiveProduct]             = useState({})

    const isMix = pizzaTypeSelected === 'mix'

    const appEl = useRef ()
    const { width } = useComponentSize (appEl)

    const layoutMode = width < 501 ? 'mobile' : 'desktop'
    const isMobile   = layoutMode === 'mobile'

    const MainContent = () => (<>
    
        <div className='cosmos-zone-one-wrapper'>
            
            {!isMobile && <SelectionPanel type={pizzaTypeSelected} onSelect={ type => setPizzaTypeSelected (type === pizzaTypeSelected ? undefined : type) }/> }

            <div className='pizzas'>
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
                                                    setActiveProduct('pizzas')
                                                    setOverlayVisible (true)
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
            <h1>Космическая паста</h1>
            { noodlesData.map (noodles => (<Noodles {...noodles} 
                                                key={noodles.name} 
                                                onClick={() => {
                                                    if(noodles.type !== "decoration") {
                                                        setActiveProduct('noodles')
                                                        setCurrentNoodles(noodles.name)
                                                        setOverlayVisible (true)
                                                    }
                                                }
                                            }/>))}                           
        </div>
    </>)

    // const AboutContent = () => (<>
    //     <div className='about'>
    //         <h1>О НАС БЛЕАТЬ</h1>
    //     </div>
    // </>)

    const LoyaltyProgram = () => (<>

        <h1>Скидосики</h1>

    </>)

    const content = useRoutes ({
                        '/':        MainContent,
                        '/about':   AboutContent,
                        '/loyalty': LoyaltyProgram,
                    })

    return <div ref={appEl} className={('app ' + (pizzaTypeSelected || '') + ' ' + layoutMode)}>

            {overlayVisible
                ? <Overlay setOverlayVisible={setOverlayVisible} activeProduct={activeProduct}/>
                : <>
                    {isMobile ? <MenuMobile type={pizzaTypeSelected} onSelect={ type => setPizzaTypeSelected (type === pizzaTypeSelected ? undefined : type) }/> : <Menu />}
                    <Radar />
                    {content}
                </>
            }
        </div>
}