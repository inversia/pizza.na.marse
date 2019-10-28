import React, { useContext } from 'react'
import { A , navigate} from 'hookrouter'
import CartCounter     from './CartCounter';
import { CartContext } from './CartContext'
import { classList }   from './util'
import DropdownMenu from './DropdownMenu'

export default function MenuMobile ({onSelect }) {

    const { addRandomPizza } = useContext (CartContext)

    const hamburgerLabels = { 
        main:      <A href="/"        className='dropdown-menu link active'>Главная</A> ,
        sales:     <A href="/loyalty" className=''>Акции</A> , 
        contacts:  <A href="/contacts" className=''>Контакты</A> , 
    }


    return <div className="menu mobile">
        <DropdownMenu 
            className='hamburger-menu link'
            items={hamburgerLabels} 
            enableSelectAll={false}
            defaultText={undefined}      
            // activeItem={activeType}
            setActiveItem={undefined}
        />

        {/* <a href="javascript:{}" className="hamburger-menu link"></a> */}
        <a href="javascript:{}" className="meat link" onClick={() => onSelect ('meat') }></a>
        <a href="javascript:{}" className="broccoli link" onClick={() => onSelect ('veg') }></a> 
        <a href="javascript:{}" className="fish link" onClick={() => onSelect ('fish') }></a> 
        <a href="javascript:{}" className="mix link" onClick={() => { addRandomPizza (); navigate ('/cart') }}></a> 
        <A href="/cart" className="cart link"><CartCounter /></A> 
    </div>
}
