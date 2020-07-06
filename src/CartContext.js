import React, { useContext, createContext, useState } from 'react'
import pizzaData from '../data/pizza'

export const CartContext = createContext ()

const genCartItemUid = ((cartItemUid = 0) => () => cartItemUid++) ()

export function ProvideCartContext ({ children }) {

    const [cartItems, _setCartItems] = useState (JSON.parse (localStorage.getItem ('cartItems')) || [])

    function setCartItems (items) {
        _setCartItems (items)
        localStorage.setItem ('cartItems', JSON.stringify (items))
    }

    const addToCart      = item => setCartItems ([...cartItems, Object.assign (item, { uid: genCartItemUid () }) ])
    const removeFromCart = item => setCartItems (cartItems.filter (otherItem => otherItem !== item))

    const setCartItemSize = (item, isLarge) => {
                                item.isLarge = isLarge
                                setCartItems ([...cartItems])
                            }

    const addRandomPizza = () => {

        const randomPizza = Math.floor (Math.random () * pizzaData.length)

        addToCart ({ productType: 'pizzas', ...pizzaData[randomPizza], isLarge: true })
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, setCartItemSize, addRandomPizza }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext () {

    return useContext (CartContext)
}

