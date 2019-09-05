import React, { useRef, useContext } from 'react'
import './Cart.css'
import CartItem from './CartItem'
import { CartContext } from './CartContext'
import pizzaData from './pizzaData'


export default function Cart () {

    const form = useRef ()

    function submitFormHandler (event) {
        
        event.preventDefault()

        //alert(form.current)
    }

    const { cartItems, addToCart, removeFromCart, setIsLarge } = useContext (CartContext)
    const isCartEmpty = cartItems.length === 0
    const randomPizza = Math.floor(Math.random() * pizzaData.length)

    return  <div className='cart-content'>
                {isCartEmpty ? 
                    <h1>К сожалению, корзина пока пуста :(</h1> 
                    : <h1 className='target'>Итак, мы уже почти у цели!</h1>
                }
                <h2>* Напоминаем, что мы доставляем только в радиусе метро Курская *
                    <div className='rocket'></div>
                </h2>
                {/* <h3>{pizzaData[randomPizza]}</h3> */}
                <div className='orders'>
                    {cartItems.map(item => <CartItem key={item.uid} item={item} /> )}
                </div>
                <div className='random'>Если Вас одолевают муки выбора, можете попытать удачи и <br/><span onClick={() => addToCart({ ...pizzaData[randomPizza], isLarge: true })}>заказать рандомную пиццу</span></div>
                {/* <pre>{JSON.stringify (cartItems, null, 4)}</pre> */}
                {/* {console.log(cartItems.name)} */}
                <form onSubmit={submitFormHandler} ref={form} className='fields'>                        
                    <input type='text' name='name'   placeholder='Как к Вам обращаться?'/>
                    <input type='text' name='adress' placeholder='Адрес доставки (напоминаем, что мы доставляем только в радиусе метро Курская)'/>
                    <input type='text' name='phone'  placeholder='Номер для связи'/>
                    <input type='text' name='notes'  placeholder='Пометки'/>
                    <input type='submit' value='Оформить заказ' />
                </form>  
            </div>
}
