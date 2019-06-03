import React from 'react'

const MenuMobile = ({onSelect }) =>
    <div className="menu mobile">
        <a href="#menu" className="hamburger-menu link"></a>
        <a href="#meatMobile" className="meat link" onClick={() => onSelect ('veg') }></a>
        <a href="#vegMobile" className="broccoli link" onClick={() => onSelect ('veg') }></a> 
        <a href="#fishMobile" className="fish link" onClick={() => onSelect ('fish') }></a> 
        <a href="#mixMobile" className="mix link" onClick={() => onSelect ('mix') }></a> 
        <a href="#basket" className="basket link"></a> 
    </div>

export default MenuMobile