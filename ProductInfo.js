import React, { useState, useRef, useContext, useEffect, useDebugValue, useLayoutEffect } from 'react'
import SizeSwitch from './SizeSwitch'
import useVisibility from './useVisibility'
import { CartContext } from './CartContext'

export default React.memo (function ProductInfo ({ name, composition, price, backgroundImage, productType, index }){

    const [isLarge, setIsLarge] = useState (false)
    const buttonRef             = useRef ()
    const isVisible             = useVisibility (buttonRef, { partial: true })

    const { addToCart } = useContext (CartContext)

    return (
        <div className='product-info' data-index={index} data-type={productType} data-name={name}>
            <div className='left-side'>
                <img className='product-image' style={{backgroundImage}} />
            </div>
            <div className='right-side'>
                <div className='name'>{name}</div>
                
                {productType === 'pizzas' && <div className='size'><SizeSwitch isLarge={isLarge} setIsLarge={setIsLarge} /></div>}
                
                <div className='price'>{productType === 'pizzas' ? price[Number (isLarge)] : price}</div>
                
                <ul>
                    {productType !== 'beverages' && composition.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
                </ul>
                <button ref={buttonRef} onClick={() => addToCart ({ productType, name, isLarge, backgroundImage, price})}>     
                    <span>ЗАКАЗАТЬ</span>
                    <div className={'highlight ' + (isVisible ? '' : 'invisible')}></div>
                    <div className={'highlight2 ' + (isVisible ? '' : 'invisible')}></div>
                </button>
            </div>
        </div>
    )
})