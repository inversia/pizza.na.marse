import React, { useContext, createContext, useState } from 'react'
import pizzaData from '../data/pizza'

export const CartContext = createContext ()

const genCartItemUid = ((cartItemUid = 0) => () => cartItemUid++) ()



export function ProvideCartContext ({ children }) {

    const [cartItems, setCartItems] = useState (JSON.parse (localStorage.getItem ('cartItems')))

    const addToCart        = item            => setCartItems ([...cartItems, Object.assign (item, { uid: genCartItemUid () }) ])
                                                localStorage.setItem ('cartItems', JSON.stringify (cartItems))

    const removeFromCart   = item            => setCartItems (cartItems.filter (otherItem => otherItem !== item))

    const setCartItemSize  = (item, isLarge) => {
                                                item.isLarge = isLarge
                                                setCartItems ([...cartItems])
                                                }
    const addRandomPizza = () => {

        const randomPizza = Math.floor (Math.random () * pizzaData.length)

        addToCart ({ productType: 'pizzas', ...pizzaData[randomPizza], isLarge: true })
        localStorage.setItem ('cartItems', JSON.stringify ({ productType: 'pizzas', ...pizzaData[randomPizza], isLarge: true }))
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

