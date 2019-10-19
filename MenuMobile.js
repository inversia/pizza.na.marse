import React, { useContext } from 'react'
import { A , navigate} from 'hookrouter'
import CartCounter     from './CartCounter';
import { CartContext } from './CartContext'
import { classList }   from './util'

export default function MenuMobile ({onSelect }) {

    const { addRandomPizza } = useContext (CartContext)

    return <div className="menu mobile">
        <a href="javascript:{}" className="hamburger-menu link"></a>
        <a href="javascript:{}" className="meat link" onClick={() => onSelect ('meat') }></a>
        <a href="javascript:{}" className="broccoli link" onClick={() => onSelect ('veg') }></a> 
        <a href="javascript:{}" className="fish link" onClick={() => onSelect ('fish') }></a> 
        <a href="javascript:{}" className="mix link" onClick={() => { addRandomPizza (); navigate ('/cart') }}></a> 
        <A href="/cart" className="cart link"><CartCounter /></A> 
    </div>
}
