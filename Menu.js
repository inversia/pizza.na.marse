import React from 'react'
import { A } from 'hookrouter'
import { classList } from './util'

const props = id => ({
    className: classList ({ link: 1, [id && ('menu-item-' + id)]: 1, active: location.pathname === ('/' + id) }),
    href: '/' + id
})

const Menu = () =>
    <div className="menu">
        <a className="tel" href="tel:+74952949958">+7 495 005 59 36</a>
        <A {...props ('')}>меню</A>
        <A {...props ('loyalty')}>акции</A>
        <A {...props ('about')}>о нас</A> 
        <a className="link" href="#booking">забронировать</a>
        <a className="link" href="#contact">контакты</a> 
        {/* <a className="basket link" href="#basket"></a>  */}
        <A {...props ('basket')}></A> 
    </div>

export default Menu