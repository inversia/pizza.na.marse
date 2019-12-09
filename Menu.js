import React, { useContext } from 'react'
import { A } from 'hookrouter'
import CartCounter from './CartCounter';
import { classList } from './util'

const props = id => ({
    className: classList ({ link: 1, [id && ('menu-item-' + id)]: 1, active: location.pathname === ('/' + id) }),
    href: '/' + id
})


function smoothScrollTo(hash) {

    const target = document.getElementById(hash)

    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}


export default function Menu () {

    return <div className="menu">
        <a className="tel" href="tel:+74952949958">+7 495 005 59 36</a>
        <A {...props ('')}>меню</A>
        <A {...props ('loyalty')}>акции</A>
        {/* <A {...props ('about')}>о нас</A>  */}
        {/* <a className="link" href="#booking">забронировать</a> */}
        {/* <a className="link" href="#contact">контакты</a>  */}
        <A {...props ('#contact')} onClick={() => smoothScrollTo('contacts')}>контакты</A> 
        {/* <a className="cart link" href="#cart"></a>  */}
        <A {...props ('cart')}><CartCounter /></A> 
    </div>
}
