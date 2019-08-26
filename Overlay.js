import React, { useRef, useState, useEffect } from 'react'
import pizzaData from './pizzaData'
import noodlesData from './noodlesData'
import DropdownMenu from './DropdownMenu'
import ProductInfo from './ProductInfo'
import useComponentSize from '@rehooks/component-size'
import './Overlay.css'
import saladsData from './saladsData';
import { useKeyPress } from 'react-use';
import { ScrollableElContext } from './ScrollableElContext'

const noDecoration = items => items.filter (p => p.itemType !== 'decoration')

export default function Overlay ({ setOverlayVisible, activeProduct, setActiveProduct}) {

    const productListEl                         = useRef ()
    const productPanelEl                        = useRef ()
    const productListSize                       = useComponentSize (productListEl)
    const [fillingType, setFillingType]         = useState(undefined)
    const [currentProduct, setCurrentProduct]   = useState (0)

    function onScroll () {

        const { children, scrollTop } = productPanelEl.current
    
        for (var i = 0; i < children.length; i++) {
            
            if ((children[i].offsetTop - scrollTop) > 0) break
        }

        setCurrentProduct (i)
    }


    const products = {
        pizzas:  pizzaData,
        noodles: noodlesData,
        salads:  saladsData,
    }

    const fillings = {
        meat: 'Мясное',
        veg: 'Вегетарианское',
        fish: 'Морепродукты',
        mix: 'Микс всех видов', 
    }

    const productLabels = { 
        pizzas: 'Пицца', 
        noodles: 'Лапша', 
        salads: 'Салаты' 
    }

    return <div className='product-overlay'>
                <div className='overlay-menu'>
                    <div className='back' onClick={() => setOverlayVisible (false)} >⇐ Назад</div>  
                    
                    <DropdownMenu 
                        className='choose-type'
                        items={productLabels} 
                        enableSelectAll={false}
                        defaultText={undefined}      
                        activeItem={activeProduct}  
                        setActiveItem={setActiveProduct}  
                    />
                    <DropdownMenu 
                        className='choose-taste'
                        items={fillings}      
                        defaultText='Выбрать начинку' 
                        activeItem={fillingType} 
                        setActiveItem={setFillingType} 
                    />
                    
                    <div className='bucket'>Корзина</div>
                </div>

                <div className='product-choose-panel'>
                    <ul ref={productListEl} className='product-list'>
                        {noDecoration (products[activeProduct])
                            .filter(p => !fillingType || (p.type === fillingType))
                            .map ((p, i, list) =>
                                <li key={p.name}
                                    className={i === currentProduct ? 'active' : ''}
                                    onClick={() => {
                                        const child = productPanelEl.current.children[i]
                                        productPanelEl.current.scrollTo ({
                                                        top: child.offsetTop - child.offsetWidth*0.075,
                                                        behavior: 'smooth'
                                                    })
                                        }
                                    }
                                    style={{ height: Math.min (window.innerWidth / 20, productListSize.height / list.length) + 'px' }}>{p.name}</li>)
                        }
                    </ul>
                </div>
                
                <div ref={productPanelEl} className='product-info-panel' onScroll={onScroll}>
                    <ScrollableElContext.Provider value='product-info-panel'>
                        {noDecoration (products[activeProduct])
                            .filter(p => !fillingType || (p.type === fillingType))
                            .map(p => <ProductInfo key={p.name} {...p} activeProduct={activeProduct}/>)
                        }
                    </ScrollableElContext.Provider>
                </div>
            </div>
}