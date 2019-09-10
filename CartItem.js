import React, { useContext, useState } from 'react'
import './CartItem.css'
import SizeSwitch from './SizeSwitch'
import { CartContext } from './CartContext'
import { classList } from './util'

export default function CartItem ({ item }) {

    const [removing, setRemoving]            = useState (false)
    const { removeFromCart, setCartItemSize } = useContext (CartContext)

    return <>
        <div className={classList ({ 'cart-item': 1, removing })}
             onTransitionEnd={e => { if (e.target.classList.contains ('cart-item')) removeFromCart (item) }}>   
            <div className='item-image' style={{backgroundImage: item.backgroundImage}}></div>
            <div className='item-name' onClick={() => alert('wooob!')}>{item.name}</div>
            {/* {console.log(item.isLarge)} */}
            <div className='cart-item-price'>{item.price[Number(item.isLarge)]}</div>
            <SizeSwitch isLarge={item.isLarge} setIsLarge={ isLarge => setCartItemSize (item, isLarge) } />
            <div onClick={() => setRemoving (true)} className='trash'></div>
            {/* <div className='price'>{item.price}</div> */}
        </div>
    </>
}