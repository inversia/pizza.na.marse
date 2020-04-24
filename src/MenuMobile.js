import React from 'react'
import { A, navigate} from 'hookrouter'
import CartCounter     from './CartCounter'
import { useCartContext } from './CartContext'
import DropdownMenu from './DropdownMenu'

export default function MenuMobile ({onSelect }) {

    const { addRandomPizza } = useCartContext ()

    const hamburgerLabels = {
        main:      <A href="/"        className='dropdown-menu link active'>Главная</A> ,
        sales:     <A href="/loyalty" className=''>Акции</A> ,
        contacts:  <a href="/#contacts" className=''>Контакты</a> ,
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
        <a href="#" className="meat link" onClick={() => onSelect ('meat') }></a>
        <a href="#" className="broccoli link" onClick={() => onSelect ('veg') }></a>
        <a href="#" className="fish link" onClick={() => onSelect ('fish') }></a>
        <a href="#" className="mix link" onClick={() => { addRandomPizza (); navigate ('/cart') }}></a>
        <A href="/cart" className="cart link"><CartCounter /></A>
    </div>
}
