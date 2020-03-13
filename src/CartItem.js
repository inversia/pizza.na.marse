import React, { useContext, useState } from 'react'
import './CartItem.css'
import SizeSwitch from './SizeSwitch'
import { CartContext } from './CartContext'
import { goToProduct } from './util'

export default function CartItem ({ item }) {

    const { removeFromCart, setCartItemSize } = useContext (CartContext)

    return <>
        <div className="cart-item">   
            <div className='item-image' style={{backgroundImage: `url(/art/${item.backgroundImage}.jpg`}}></div>
            <div className='item-name' onClick={() => goToProduct (item.productType, item.name)}>{item.name}</div>
            <div className='cart-item-price'>{item.price[item.isLarge ? 1 : 0]}</div>
            {item.productType === 'pizzas' && <SizeSwitch isLarge={item.isLarge} setIsLarge={ isLarge => setCartItemSize (item, isLarge) } />}
            <div onClick={() => removeFromCart (item)} className='trash'></div>
            {/* <div className='price'>{item.price}</div> */}
        </div>
    </>
}