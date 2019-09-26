import React, { useState, useRef } from 'react'
import useComponentSize from '@rehooks/component-size'
import { useRoutes, usePath, A } from 'hookrouter'
import Menu from './Menu'
import Radar from './Radar'
import MenuMobile from './MenuMobile'
import MainContent from './MainContent'
import AboutContent from './AboutContent'
import LoyaltyContent from './LoyaltyContent'
import Products from './Products'
import Cart from './Cart'

import { CartContext, useCartState } from './CartContext'
import { LayoutModeContext } from './LayoutModeContext'

import { decodeProps } from './util'

export default function App () {
    
    const appEl      = useRef ()
    const { width }  = useComponentSize (appEl)
    const layoutMode = width < 501 ? 'mobile' : 'desktop'
    const isMobile   = layoutMode === 'mobile'

    const [pizzaTypeSelected, setPizzaTypeSelected] = useState (undefined)

    const content = useRoutes ({
                        '/':                     () => <MainContent {...{pizzaTypeSelected, setPizzaTypeSelected, isMobile}} />,
                        '/about':                () => <AboutContent />,
                        '/loyalty':              () => <LoyaltyContent />,
                        '/cart':                 () => <Cart />,

                        '/products':                         ()    => <Products />,
                        '/products/:activeType':             props => <Products {...decodeProps (props)} />,
                        '/products/:activeType/:activeName': props => <Products {...decodeProps (props)} />,
                    })

    const path = usePath ()
    const isProducts = path.startsWith ('/products')

    const menu = isMobile ? <MenuMobile type={pizzaTypeSelected} onSelect={ type => setPizzaTypeSelected (type === pizzaTypeSelected ? undefined : type) }/> : <Menu />

    return  <div ref={appEl} className={('app ' + (pizzaTypeSelected || '') + ' ' + layoutMode)}>

                <LayoutModeContext.Provider value={{ isMobile, layoutMode }}>
                    <CartContext.Provider value={useCartState ()}>
                        {!isProducts && menu}
                        {/* <Radar /> */}
                        {content}
                    </CartContext.Provider>
                </LayoutModeContext.Provider>
            </div>
}

