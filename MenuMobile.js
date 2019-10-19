import React from 'react'
import { A } from 'hookrouter'
import CartCounter from './CartCounter';
import { classList } from './util'

const MenuMobile = ({onSelect }) =>
    <div className="menu mobile">
        <a href="javascript:{}" className="hamburger-menu link"></a>
        <a href="javascript:{}" className="meat link" onClick={() => onSelect ('meat') }></a>
        <a href="javascript:{}" className="broccoli link" onClick={() => onSelect ('veg') }></a> 
        <a href="javascript:{}" className="fish link" onClick={() => onSelect ('fish') }></a> 
        <a href="javascript:{}" className="mix link" onClick={() => onSelect ('mix') }></a> 
        {/* <A {...props ('cart')}><CartCounter /></A>  */}
        <A href="/cart" className="cart link"><CartCounter /></A> 
    </div>

export default MenuMobile