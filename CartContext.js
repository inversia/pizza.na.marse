import { createContext, useState } from 'react'

const CartContext = createContext ()

const genCartItemUid = ((cartItemUid = 0) => () => cartItemUid++) ()

function useCartState () {

    const [cartItems, setCartItems] = useState ([])

    const addToCart        = item            => setCartItems ([...cartItems, Object.assign (item, { uid: genCartItemUid () }) ])
    const removeFromCart   = item            => setCartItems (cartItems.filter (otherItem => otherItem !== item))
    const setCartItemSize  = (item, isLarge) => {
                                                    item.isLarge = isLarge
                                                    setCartItems ([...cartItems])
                                                }

    return { cartItems, addToCart, removeFromCart, setCartItemSize }
}

export { CartContext, useCartState }