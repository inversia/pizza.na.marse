import React, { useRef, useState, useEffect, useContext } from 'react'

import pizzaData from './data/pizza'
import noodlesData from './data/noodles'
import saladsData from './data/salads'
import beveragesData from './data/beverages'

import DropdownMenu from './DropdownMenu'
import ProductInfo from './ProductInfo'
import useComponentSize from '@rehooks/component-size'
import { A, useTitle, navigate } from 'hookrouter'

import {goToProduct} from './util'
import { useKeyPress } from 'react-use';
import { ScrollableElContext } from './ScrollableElContext'
import { LayoutModeContext } from './LayoutModeContext'
import CartCounter from './CartCounter'
const { entries } = Object

import './Products.css'


const noDecoration = items => items.filter (p => p.itemType !== 'decoration')

const products = {
    pizzas:    pizzaData,
    noodles:   noodlesData,
    salads:    saladsData,
    beverages: beveragesData,
}

const fillings = {
    meat: 'Мясное',
    veg: 'Вегетарианское',
    fish: 'Морепродукты',
    mix: 'Микс всех видов', 
}

const productLabels = { 
    pizzas: 'Пицца', 
    noodles: 'Паста', 
    salads: 'Салаты',
    beverages: 'Напитки', 
}

const SideProductList = React.memo (function SideProductList ({activeType, fillingType, visibleProductIndex, onClick }) {
    
    const productListEl   = useRef ()
    const productListSize = useComponentSize (productListEl)

    return <div className='product-choose-panel'>
        <ul ref={productListEl} className='product-list'>
            {noDecoration (products[activeType])
                .filter(p => !fillingType || (p.type === fillingType))
                .map ((p, i, list) =>
                    <li key={p.name}
                        className={i === visibleProductIndex ? 'active' : ''}
                        onClick={() => onClick (i)}
                        style={{ height: Math.min (window.innerWidth / 20, productListSize.height / list.length) + 'px' }}>{p.name}</li>)
            }
        </ul>
    </div>
})

export default React.memo (function Products ({ activeType = 'pizzas', activeName }) {

    const productPanelEl                        = useRef ()
    const [fillingType, setFillingType]         = useState(undefined)
    const [visibleProductIndex, setVisibleProductIndex] = useState (0)

    const activeProductEl = useRef ()

    function onScroll () {

        const { children, scrollTop } = productPanelEl.current
        
        const productEls = [...children].filter (x => x.classList.contains ('product-info'))
    
        const el = productEls.find (x => (x.offsetTop - scrollTop) > 0)

        if (el) {
            if (activeProductEl.current !== el) {
                activeProductEl.current = el

                goToProduct (el.dataset.type, el.dataset.name, true )
                // navigate (`/products/${el.dataset.type}/${encodeURIComponent (el.dataset.name)}`, true)
                setVisibleProductIndex (Number (el.dataset.index))
            }
        }
    }

    // const { cartItems } = useContext (CartContext)

    function scrollTo ({ type, name, behavior }) {

        const el = name
                        ? productPanelEl.current.querySelector (`.product-info[data-type="${type}"][data-name="${name}"]`)
                        : productPanelEl.current.querySelector (`h2[data-type="${type}"]`)

        if (el) {
            productPanelEl.current.scrollTo ({ top: el.offsetTop - window.innerWidth*0.19, behavior })
        }
    }

    useEffect (() => { scrollTo ({ type: activeType, name: activeName }) }, [])

    const { layoutMode, isMobile } = useContext (LayoutModeContext)

    return <div className='product-overlay'>
                <div className={'overlay-menu ' + layoutMode}>
                    <div className='back' onClick={() => navigate ('/') } >Назад</div>  
                    
                    <DropdownMenu 
                        className='choose-type'
                        items={productLabels} 
                        enableSelectAll={false}
                        defaultText={undefined}      
                        activeItem={activeType}
                        setActiveItem={type => {
                            navigate (`/products/${type}`, true)
                            scrollTo ({ type, behavior: 'smooth' })
                        }}  
                    />
                    <DropdownMenu 
                        className='choose-taste'
                        items={fillings}      
                        defaultText='Начинка' 
                        activeItem={fillingType} 
                        setActiveItem={setFillingType} 
                    />
                    
                    <div className='bucket' onClick={() => navigate ('/cart') } >Корзина <CartCounter /></div>
                    
                </div>

                {!isMobile && <SideProductList {...{
                    activeType, fillingType, visibleProductIndex,
                    onClick (i) {
                        
                        // const child = productPanelEl.current.querySelector (`.product-info[data-type="${activeType}"][data-index="${i}"]`)

                        const child = [...productPanelEl.current.children].find (x => (x.dataset.type  === activeType) &&
                                                                                      (x.dataset.index === String (i)))

                        if (child) {
                            productPanelEl.current.scrollTo ({
                                top: child.offsetTop - child.offsetWidth*0.075,
                                behavior: 'smooth'
                            })
                        }
                    }
                }} />}
                
                <div ref={productPanelEl} className='product-info-panel' onScroll={onScroll}>
                    <ScrollableElContext.Provider value='product-info-panel'>
                        {
                            [].concat (...entries (products).map (([type, products]) =>

                                [
                                    <h2 data-type={type}>{productLabels[type]}</h2>,
                                    ...noDecoration (products)
                                        .filter (p => !fillingType || (p.type === fillingType))
                                        .map ((p, i) => <ProductInfo key={p.name} {...p} productType={type} index={i}/>)
                                ]
                            ))
                        }
                    </ScrollableElContext.Provider>
                </div>
            </div>
})