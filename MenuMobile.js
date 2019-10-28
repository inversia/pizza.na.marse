import React, { useContext } from 'react'
import { A , navigate} from 'hookrouter'
import CartCounter     from './CartCounter';
import { CartContext } from './CartContext'
import { classList }   from './util'
import DropdownMenu from './DropdownMenu'

export default function MenuMobile ({onSelect }) {

    const { addRandomPizza } = useContext (CartContext)

    // const paths = {
    //     main:    pizzaData,
    //     sales:   noodlesData,
    //     contacts:    saladsData,
    // }

    const hamburgerLabels = { 
        main: 'Главная', 
        sales: 'Акции', 
        contacts: 'Контакты',
    }


    return <div className="menu mobile">
        <DropdownMenu 
            className='hamburger-menu link'
            items={hamburgerLabels} 
            enableSelectAll={false}
            defaultText={undefined}      
            // activeItem={activeType}
            setActiveItem={type => {
                navigate (`/products/${type}`, true)
                scrollTo ({ type, behavior: 'smooth' }) 
            }}
        />

        {/* <a href="javascript:{}" className="hamburger-menu link"></a> */}
        <a href="javascript:{}" className="meat link" onClick={() => onSelect ('meat') }></a>
        <a href="javascript:{}" className="broccoli link" onClick={() => onSelect ('veg') }></a> 
        <a href="javascript:{}" className="fish link" onClick={() => onSelect ('fish') }></a> 
        <a href="javascript:{}" className="mix link" onClick={() => { addRandomPizza (); navigate ('/cart') }}></a> 
        <A href="/cart" className="cart link"><CartCounter /></A> 
    </div>
}
