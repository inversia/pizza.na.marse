import React, { useRef, useState } from 'react'
import pizzaData from './pizzaData'
import noodlesData from './noodlesData'
import DropdownMenu from './DropdownMenu'
import PizzaInfo from './PizzaInfo'
import NoodlesInfo from './NoodlesInfo'
import ProductInfo from './ProductInfo'
import useComponentSize from '@rehooks/component-size'
import './Overlay.css'
import saladsData from './saladsData';
import { useKeyPress } from 'react-use';
import { classList } from './util'
import ScrollableElContext from './ScrollableElContext'

const noDecoration = items => items.filter (p => p.itemType !== 'decoration')

export default function Overlay ({ setOverlayVisible, activeProduct, setActiveProduct}) {

    const productListEl      = useRef ()
    const productInfoPanelEl = useRef ()
    const productListSize    = useComponentSize (productListEl)
    // const [dropdownFillingMenuVisible, setDropdownFillingMenuVisible] = useState(false)
    const [fillingType, setFillingType] = useState(undefined)
    // const [activeItem, setActiveItem] = useState(undefined)
    const [visible, setVisible] = useState (false)

    const [dropdownMenuVisible, setDropdownMenuVisible] = useState(false)    //  ааа блять, и что, теперь ты тоже скажешь, что не надо его протаскивать наверх?!

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
                                <li key={p.name} style={{ height: Math.min (window.innerWidth / 20, productListSize.height / list.length) + 'px' }}>{p.name}</li>)
                        }
                    </ul>
                </div>
                
                <div className='product-info-panel'>
                    <ScrollableElContext.Provider value='product-info-panel'>
                        {noDecoration (products[activeProduct])
                            .filter(p => !fillingType || (p.type === fillingType))
                            .map(p => <ProductInfo key={p.name} {...p} activeProduct={activeProduct}/>)
                        }
                    </ScrollableElContext.Provider>
                </div>
            </div>
}