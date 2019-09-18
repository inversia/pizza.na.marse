import React, { useRef, useContext, useState } from 'react'
import './Cart.css'
import CartItem from './CartItem'
import { CartContext } from './CartContext'
import pizzaData from './data/pizza'
import { classList } from './util'

export default function Cart () {

    const form = useRef ()

    function submitFormHandler (event) {
        
        event.preventDefault()

        //alert(form.current)
    }

    const { cartItems, addToCart, removeFromCart, setIsLarge } = useContext (CartContext)
    const isCartEmpty = cartItems.length === 0
    const randomPizza = Math.floor(Math.random() * pizzaData.length)

    const [submitClicked, setSubmitClicked] = useState (false)

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
                    {cartItems.map(item => <CartItem key={item.uid} item={item} />)}
                </div>
                <div className='random'>Если Вас одолевают муки выбора, можете попытать удачи и <br/><span onClick={() => addToCart({ productType: 'pizzas', ...pizzaData[randomPizza], isLarge: true })}>заказать рандомную пиццу</span></div>
                {/* <pre>{JSON.stringify (cartItems, null, 4)}</pre> */}
                <form onSubmit={submitFormHandler} ref={form} className={classList ({ fields: 1, 'submit-clicked': submitClicked })}>                        
                    <input type='text' name='name'   placeholder='Как к Вам обращаться?'/>
                    <input type='text' name='address' placeholder='Адрес доставки (напоминаем, что мы доставляем только в радиусе метро Курская)' required />
                    <input type='tel' pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$' name='phone'  placeholder='Номер для связи' required />
                    <input type='text' name='notes'  placeholder='Пометки'/>
                    <input type='submit' value='Оформить заказ' onClick={() => setSubmitClicked (true)} />
                </form>  
            </div>
}
