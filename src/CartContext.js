import { createContext, useState } from 'react'
import pizzaData from '../data/pizza'

const CartContext = createContext ()

const genCartItemUid = ((cartItemUid = 0) => () => cartItemUid++) ()

function useCartState () {

    const [cartItems, setCartItems] = useState (JSON.parse(localStorage.getItem('cartItems')))

    const addToCart        = item            => setCartItems ([...cartItems, Object.assign (item, { uid: genCartItemUid () }) ])   
                                                localStorage.setItem('cartItems', JSON.stringify(cartItems))

    const removeFromCart   = item            => setCartItems (cartItems.filter (otherItem => otherItem !== item))

    const setCartItemSize  = (item, isLarge) => {
                                                item.isLarge = isLarge
                                                setCartItems ([...cartItems])
                                                }
    const addRandomPizza = () => {

        const randomPizza = Math.floor(Math.random() * pizzaData.length)

        addToCart({ productType: 'pizzas', ...pizzaData[randomPizza], isLarge: true }) 
        localStorage.setItem('cartItems', JSON.stringify({ productType: 'pizzas', ...pizzaData[randomPizza], isLarge: true }))
    }

    return { cartItems, addToCart, removeFromCart, setCartItemSize, addRandomPizza }
}

export { CartContext, useCartState }  

