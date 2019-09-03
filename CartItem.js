import React, { useContext} from 'react'
import './CartItem.css'
import SizeSwitch from './SizeSwitch'
import { CartContext } from './CartContext'

export default function CartItem ({ item }) {

    const { removeFromCart, setCartItemSize } = useContext (CartContext)

    return <>
        <div className='orders-list'>
            <SizeSwitch className ='switch' isLarge={item.isLarge} setIsLarge={ isLarge => setCartItemSize (item, isLarge) } />    
            <div className='item-image' style={{backgroundImage: item.backgroundImage}}></div>
            <span>{item.name}</span>
            <div onClick={() => removeFromCart(item)}className='trash'></div>
        </div>
    </>
}