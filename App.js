import React, { useState, useCallback, useLayoutEffect, useEffect, useRef } from 'react'
import useComponentSize from '@rehooks/component-size'
import { useRoutes, A } from 'hookrouter'

import pizzaData from './data/pizza'
import saladsData from './data/salads'
import noodlesData from './data/noodles'

import Pizza from './Pizza'
import Menu from './Menu'
import SelectionPanel from './SelectionPanel'
import Radar from './Radar'
import Carousel from './Carousel'
import Overlay from './Overlay'
import Noodles from './Noodles'
import MenuMobile from './MenuMobile'
import AboutContent from './AboutContent'
import LoyaltyContent from './LoyaltyContent'
import Cart from './Cart'
import Footer from './Footer'
import { CartContext } from './CartContext'

const genCartItemUid = ((cartItemUid = 0) => () => cartItemUid++) ()

export default function App () {
    
    const [overlayVisible, setOverlayVisible]           = useState (false)
    const [pizzaTypeSelected,   setPizzaTypeSelected]   = useState (undefined)
    const [selectedPizzas,      setSelectedPizzas]      = useState ({})
    const [currentNoodles,      setCurrentNoodles]      = useState ('лапша2')
    const [activeProduct, setActiveProduct]             = useState ('pizzas')
    const appEl                                         = useRef ()
    const { width }                                     = useComponentSize (appEl)
    const layoutMode = width < 501 ? 'mobile' : 'desktop'
    const isMobile   = layoutMode === 'mobile'
    const isMix = pizzaTypeSelected === 'mix'

    const renderMainContent = () => (<>
    
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
                    { saladsData.map ((salad, i) => (
                            <>
                                <div className='pic' style={{backgroundImage: salad.backgroundImage}} />
                                <div className='title'>{salad.name}</div>
                            </>
                    )) }
                </Carousel>
            </div> 
        </div>
        {/* <div className='noodles-wrapper'>
            <h1>Космическая паста</h1>
            { noodlesData.map (noodles => (<Noodles {...noodles} 
                                                key={noodles.name} 
                                                onClick={() => {
                                                    if(noodles.itemType !== 'decoration') {
                                                        setActiveProduct('noodles')
                                                        setCurrentNoodles(noodles.name)
                                                        setOverlayVisible (true)
                                                    }
                                                }
                                            }/>))}                           
        </div> */}
        <Footer />
    </>)

    const content = useRoutes ({
                        '/':        renderMainContent,
                        '/about':   () => <AboutContent />,
                        '/loyalty': () => <LoyaltyContent />,
                        '/cart':    () => <Cart />,
                    })

    // const [cartItems, setCartItems] = useState (pizzaData.slice (0, 3))

    const [cartItems, setCartItems] = useState ([])

    const addToCart        = item            => setCartItems ([...cartItems, Object.assign (item, { uid: genCartItemUid () }) ])
    const removeFromCart   = item            => setCartItems (cartItems.filter (otherItem => otherItem !== item))
    const setCartItemSize  = (item, isLarge) => {
                                                    item.isLarge = isLarge
                                                    setCartItems ([...cartItems])
                                                }

    return <div ref={appEl} className={('app ' + (pizzaTypeSelected || '') + ' ' + layoutMode)}>

            <CartContext.Provider value={{cartItems, addToCart, removeFromCart, setCartItemSize}}>

                {overlayVisible
                    ? <Overlay setOverlayVisible={setOverlayVisible} activeProduct={activeProduct} setActiveProduct={setActiveProduct} />
                    : <>
                        {isMobile ? <MenuMobile type={pizzaTypeSelected} onSelect={ type => setPizzaTypeSelected (type === pizzaTypeSelected ? undefined : type) }/> : <Menu />}
                        {/* <Radar /> */}
                        {content}
                    </>
                }
            </CartContext.Provider>
        </div>
}