import React, { useContext, useRef, useEffect } from 'react'
import { CartContext } from './CartContext'
import './CartCounter.css'
import { classList } from './util'

export default function CartCounter () {

    const el = useRef ()

    const { cartItems } = useContext (CartContext)

    const prevNumItems = useRef (cartItems.length)

    const isChanged = cartItems.length !== prevNumItems.current
    if (isChanged) prevNumItems.current = cartItems.length

    const offsets = [0, 0.3, 0, 0.08, 0.2, 0, 0, 0, 0.05, 0, 0]
    const offset = offsets[cartItems.length] || 0

    useEffect (() => {
        if (isChanged) {
            el.current.classList.remove ('pulse-alert')
            el.current.getBoundingClientRect () // вызывает reflow для рестарта анимации pulse-alert
            el.current.classList.add ('pulse-alert')
        }
    })

    return  <div ref={el} className={classList ({ 'cart-counter': 1, 'more-than-10': cartItems.length > 9 && cartItems.length < 20, 'more-than-20': cartItems.length > 19 })}
                 onAnimationEnd={e => e.target.classList.remove ('pulse-alert')}
                 style={{paddingRight:offset + 'vw'}}>{cartItems.length}</div>
}