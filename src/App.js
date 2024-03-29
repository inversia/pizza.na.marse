import React, { useState, useRef, useContext, useEffect} from 'react'
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
import Footer from './Footer'
import { ProvideCartContext } from './CartContext'
import { LayoutModeContext, useLayoutContext } from './LayoutModeContext'
import { decodeProps } from './util'

export default function App () {

    const appEl      = useRef ()
    const { width }  = useComponentSize (appEl)
    const layoutMode = width <= 500 ? 'mobile' : 'desktop'
    const isMobile   = layoutMode === 'mobile'

    const [pizzaTypeSelected, setPizzaTypeSelected] = useState (undefined)

    const content = useRoutes ({
                        '/':                     () => <MainContent {...{pizzaTypeSelected, setPizzaTypeSelected, isMobile, layoutMode }} />,
                        '/about':                () => <AboutContent />,
                        '/loyalty':              () => <LoyaltyContent />,
                        '/cart':                 () => <Cart />,
                        '/contacts':             () => <a href="/#contacts"></a>,

                        '/products':                         ()    => <Products />,
                        '/products/:activeType':             props => <Products {...decodeProps (props)} />,
                        '/products/:activeType/:activeName': props => <Products {...decodeProps (props)} />,
                    })

    const path = usePath ()
    const isProducts = path.startsWith ('/products')

    const menu = isMobile ? <MenuMobile type={pizzaTypeSelected} onSelect={ type => setPizzaTypeSelected (type === pizzaTypeSelected ? undefined : type) }/> : <Menu />

    return  <LayoutModeContext.Provider value={{ isMobile, layoutMode }}>
                <div ref={appEl} className={('app ' + (pizzaTypeSelected || '') + ' ' + layoutMode)}>

                    {/* <LayoutModeContext.Provider value={{ isMobile, layoutMode }}> */}
                        <ProvideCartContext>
                            {!isProducts && menu}
                            {/* <Radar /> */}
                            {content}
                        </ProvideCartContext>
                </div>
            </LayoutModeContext.Provider>
}

