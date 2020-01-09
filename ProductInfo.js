import React, { useState, useRef, useContext, useEffect, useDebugValue, useLayoutEffect } from 'react'
import useVisibility from './useVisibility'

import SizeSwitch from './SizeSwitch'
import AddingButton from './AddingButton'
import { CartContext } from './CartContext'
import { LayoutModeContext } from './LayoutModeContext'

export default React.memo (function ProductInfo ({ name, composition, price, backgroundImage, productType, index }){

    const [isLarge, setIsLarge] = useState (false)
    const buttonRef             = useRef ()
    const isVisible             = useVisibility (buttonRef, { partial: true })

    const { addToCart } = useContext (CartContext)
    const { layoutMode, isMobile } = useContext (LayoutModeContext)

    //class={classList ({ 'cart-items': 1, 'empty': !cartItems.length })}

    return (
        <div className={'product-info ' + layoutMode} data-index={index} data-type={productType} data-name={name}>
            <div className='left-side'>
                <img className='product-image' style={{backgroundImage: `url(/art/product.${backgroundImage}.jpg`}} />
            </div>
            <div className='right-side'>
                <h3 className='name'>{name}</h3>
                <div className='size-and-price'>
                    {productType === 'pizzas' && <div className='size'><SizeSwitch isLarge={isLarge} setIsLarge={setIsLarge} /></div>}
                    <div className='price'>{productType === 'pizzas' ? price[Number (isLarge)] : price}</div>
                </div>
                
                <ul>
                    {productType !== 'beverages' && composition.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
                </ul>
                {/* <button ref={buttonRef} onClick={() => addToCart ({ productType, name, isLarge, backgroundImage, price})}>     
                    <span>ЗАКАЗАТЬ</span>
                    <div className={'highlight ' + (isVisible ? '' : 'invisible')}></div>
                    <div className={'highlight2 ' + (isVisible ? '' : 'invisible')}></div>
                </button> */}
                
                <AddingButton productType={productType} name={name} isLarge={isLarge} backgroundImage={backgroundImage} price={price}/>

            </div>
        </div>
    )
})