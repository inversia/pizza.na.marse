import React, { useRef, useContext, useState } from 'react'
import './Cart.css'
import CartItem from './CartItem'
import { CartContext } from './CartContext'
import { classList } from './util'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function Cart () {

    const form = useRef ()

    const [submitClicked, setSubmitClicked] = useState (false)

    function onSubmit (event) {
        
        setSubmitClicked (true)
        event.preventDefault()

        //alert(form.current)
    }

    const { cartItems, addRandomPizza, removeFromCart, setIsLarge } = useContext (CartContext)
    const isCartEmpty = cartItems.length === 0

    return  <div className='cart-content'>
                {isCartEmpty ? 
                    <h1>К сожалению, корзина пока пуста :(</h1> 
                    : <h1 className='target'>Итак, мы уже почти у цели!</h1>
                }
                {/* <h3>{pizzaData[randomPizza]}</h3> */}

                <div className='inner'>
                    <div className='delivery-radius'>Напоминаем, что мы доставляем только в радиусе метро Курская
                        <div className='rocket'></div>
                    </div>

                    <div class={classList ({ 'cart-items': 1, 'empty': !cartItems.length })}>
                        <TransitionGroup component={null}>
                            {cartItems.map (item =>
                                <CSSTransition key={item.uid} timeout={500} classNames='cart-item'>
                                   <CartItem item={item} />
                                </CSSTransition>
                            )}
                        </TransitionGroup>
                    </div>
                
                    <div className='random'>Если Вас одолевают муки выбора, можете попытать удачи и <br/><span onClick={() => addRandomPizza()}>добавить рандомную пиццу</span></div>
                    {/* <pre>{JSON.stringify (cartItems, null, 4)}</pre> */}
                    <form ref={form} className={classList ({ fields: 1, 'submit-clicked': submitClicked })}>                        
                        <input type='text' name='name'   placeholder='Как к Вам обращаться?'/>
                        <input type='text' name='address' placeholder='Адрес доставки (напоминаем, что мы доставляем только в радиусе метро Курская)' required />
                        <input type='tel' pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$' name='phone'  placeholder='Номер для связи' required />
                        <input type='text' name='notes'  placeholder='Пометки'/>
                    </form>
                    <button class='submit' onClick={onSubmit}>Оформить заказ
                        <div className='cart-highlight'></div>
                        <div className='cart-highlight2'></div>
                    </button>
                </div> 
            </div>
}
