import React, { useRef, useContext, useState } from 'react'
import './Cart.css'
import CartItem from './CartItem'
import { CartContext } from './CartContext'
import { classList, timeout } from './util'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { productLabels } from './Products'

function RequiredInput (props) {

    const [edited, setEdited] = useState (false)

    return <input {...props} {...edited && { 'data-edited': true }} onBlur={() => setEdited (true)} onInput={() => setEdited (true)} required></input>
}

export default function Cart () {

    const form = useRef ()

    const [isLoading, setIsLoading] = useState (false)
    const [isDone, setIsDone] = useState (false)

    async function onSubmit (event) {

        const formInputs = Object.fromEntries (new FormData (form.current))

        try {

            event.preventDefault ()

            setIsLoading (true)

            await timeout (2000)

            setIsLoading (false)
            setIsDone (true)


            function getEmailText (form) {

                const pizzaSize = {
                    true: 'большая',
                    false: 'маленькая',
                    undefined: ''
                }

                const orderInfo = cartItems.map (x => ` ${productLabels[x.productType]} «‎${x.name}» ${pizzaSize[x.isLarge]}`)

                return `Новый заказ от ${form.name || 'дорогого клиента'}
По адресу: ${form.address}
Номер для связи: ${form.phone}
${form.notes ? `Пометки: ${form.notes}` : ''}
Что приготовить: ${orderInfo}`
            }

            // console.log (getEmailText (formInputs))

            const response = await fetch ('https://hn5giybyzb.execute-api.eu-central-1.amazonaws.com/default/submitPizzaOrder', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify (getEmailText (formInputs))
            })

            if (response.status != 200) {
                throw new Error (await response.text ())
            }

        } catch (error){
            alert ('You have an error: ' + error.message)
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

                <div className={classList ({'inner': 1, 'form-loading': isLoading, 'done': isDone})}>
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

                    <div className='random'>Если Вас одолевают муки выбора, можете попытать удачи и <br/><span onClick={() => addRandomPizza ()}>добавить рандомную пиццу</span></div>

                    <form ref={form} className='fields'>
                        <input disabled={isLoading}         type='text' name='name'    placeholder='Как к Вам обращаться?' defaultValue = "КУКУРУКУ"/>
                        <RequiredInput disabled={isLoading} type='text' name='address' placeholder='Адрес (доставка только в радиусе метро Курская)' defaultValue = "ул.Дурдома Ромашки 23"/>
                        <RequiredInput disabled={isLoading} type='tel'  name='phone'   pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$' placeholder='Номер для связи' defaultValue = "+79293445618" />
                        <input disabled={isLoading}         type='text' name='notes'   placeholder='Пометки' defaultValue = "Я ест груд"/>
                    </form>
                    <button className='submit' onClick={onSubmit}>
                        <div className='cart-highlight'></div>
                        <div className='cart-highlight2'></div>
                    </button>
                </div>
            </div>
}
