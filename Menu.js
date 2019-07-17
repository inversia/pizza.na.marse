import React from 'react'
import { A } from 'hookrouter'

const Menu = () =>
    <div className="menu">
        <a className="tel" href="tel:+74952949958">+7 495 005 59 36</a>
        <A href="/" className="link">меню</A>
        <A href="/loyalty" className="link">акции</A>
        <A href="/about" className="link">о нас</A> 
        <a href="#booking" className="link">забронировать</a>
        <a href="#contact" className="link">контакты</a> 
        <a href="#basket" className="basket link"></a> 
    </div>

export default Menu