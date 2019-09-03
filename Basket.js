import React, { useRef, useContext } from 'react'
import './Basket.css'
import CartItem from './CartItem'
import { CartContext } from './CartContext'




export default function Basket () {

    const form = useRef ()

    function submitFormHandler (event) {
        
        event.preventDefault()

        //alert(form.current)
    }

    const { cartItems, addToCart, removeFromCart, setIsLarge } = useContext (CartContext)

    return  <div className='basket-content'>
                <div className='target'></div>
                <div className='rocket'></div>
                <h2>* Напоминаем, что мы доставляем только в радиусе метро Курская *</h2>
                <div className='orders'>
                    {cartItems.map(item => <CartItem item={item} /> )}
                </div>
                {/* <pre>{JSON.stringify (cartItems, null, 4)}</pre> */}
                {/* {console.log(cartItems.name)} */}
                <form onSubmit={submitFormHandler} ref={form} className='fields'>                        
                    <input type='text' name='name'   placeholder='Как к Вам обращаться?'/>
                    <input type='text' name='adress' placeholder='Адрес доставки'/>
                    <input type='text' name='phone'  placeholder='Номер для связи'/>
                    <input type='text' name='notes'  placeholder='Пометки'/>
                
                    <input type='submit' value='Оформить заказ' />
                </form>  
            </div>
}
