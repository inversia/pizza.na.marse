import React, { useRef, useContext, useState } from 'react'
import './Cart.css'
import CartItem from './CartItem'
import { CartContext } from './CartContext'
import { classList, timeout } from './util'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function RequiredInput (props) {

    const [edited, setEdited] = useState (false)

    return <input {...props} {...edited && { 'data-edited': true }} onBlur={() => setEdited (true)} onInput={() => setEdited (true)} required></input>
}

export default function Cart () {

    const form = useRef ()

    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)

    async function onSubmit (event) {

        const formInputs =  Object.fromEntries(new FormData (form.current))
        const addressAndNumberIs = true

        try {

            event.preventDefault()

            setIsLoading(true)

            await timeout (2000)

            setIsLoading(false)
            setIsDone(true)

            console.log(formInputs.phone)
            
            // await fetch ('https://ykxypcgmw9.execute-api.eu-central-1.amazonaws.com/main', {

            //             method: 'POST',
            //             body: JSON.stringify (formInputs)
            //         })

            // alert(isLoading)
            // alert(submitClicked)


        } catch(error){

        }
    }

    const { cartItems, addRandomPizza, removeFromCart, setIsLarge} = useContext (CartContext)

    const isCartEmpty = cartItems.length === 0

    const prices = cartItems.map (item => item.price[item.isLarge ? 1 : 0])
    const total  = prices.reduce ((a, b) => a + b, 0)

    return  <div className='cart-content'>
                {isCartEmpty ? 
                    <h1>К сожалению, корзина пока пуста :(</h1> 
                    : <h1 className='target'>Итак, мы уже почти у цели!</h1>
                }

                <div className={classList({'inner': 1, 'form-loading': isLoading, 'done': isDone})}>
                    <div className='delivery-radius'>Напоминаем, что мы доставляем только в радиусе метро Курская
                        <div className='rocket'></div>
                    </div>

                    <div className={classList ({ 'cart-items': 1, 'empty': !cartItems.length })}>
                        <TransitionGroup component={null}>
                            {cartItems.map (item =>
                                <CSSTransition key={item.uid} timeout={500} classNames='cart-item'>
                                   <CartItem item={item} />
                                </CSSTransition>
                            )}
                        </TransitionGroup>
                    </div>

                    {(prices.length > 1) && <div className='total'>{ 'Итого: ' + total}</div>}
     
                    <div className='random'>Если Вас одолевают муки выбора, можете попытать удачи и <br/><span onClick={() => addRandomPizza()}>добавить рандомную пиццу</span></div>
                    {/* <pre>{JSON.stringify (cartItems, null, 4)}</pre> */}
                    
                    <form ref={form} className='fields'>                        
                        <input disabled={isLoading}         type='text' name='name'    placeholder='Как к Вам обращаться?'/>
                        <RequiredInput disabled={isLoading} type='text' name='address' placeholder='Адрес (доставка только в радиусе метро Курская)' />
                        <RequiredInput disabled={isLoading} type='tel'  name='phone'   pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$' placeholder='Номер для связи' />
                        <input disabled={isLoading}         type='text' name='notes'   placeholder='Пометки'/>
                    </form>
                    <button className='submit' onSubmit={onSubmit}>
                        <div className='cart-highlight'></div>
                        <div className='cart-highlight2'></div>
                    </button>
                </div> 
            </div>
}
