import React, { useRef, useContext, useState } from 'react'
import './Cart.css'
import CartItem from './CartItem'
import { CartContext } from './CartContext'
import { classList, timeout } from './util'
import { TransitionGroup, CSSTransition } from 'react-transition-group'


export default function Cart () {

    const form = useRef ()

    const [submitClicked, setSubmitClicked] = useState (false)
    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)

    async function onSubmit (event) {

        const formInputs =  Object.fromEntries(new FormData (form.current))

        try {

            setSubmitClicked (true)
            event.preventDefault()

            setIsLoading(true)

            console.log('тут типа запрос на сервер')

            await timeout (6000)

            setIsLoading(false)
            setIsDone(true)
            
            // await fetch ('https://ykxypcgmw9.execute-api.eu-central-1.amazonaws.com/main', {

            //             method: 'POST',
            //             body: JSON.stringify (formInputs)
            //         })

            // alert(isLoading)
            // alert(submitClicked)


        } catch(error){
            alert('Выйди и зайди нормально')
        }
    }

    const { cartItems, addRandomPizza, removeFromCart, setIsLarge} = useContext (CartContext)
    const isCartEmpty = cartItems.length === 0

    const prices = cartItems.map(item => item.price[Number(item.isLarge)])
    const total = prices.reduce((a, b) => a + b, 0)

    return  <div className='cart-content'>
                {isCartEmpty ? 
                    <h1>К сожалению, корзина пока пуста :(</h1> 
                    : <h1 className='target'>Итак, мы уже почти у цели!</h1>
                }

                <div className={classList({'inner': 1, 'form-loading': isLoading})}>
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

                    <form ref={form} className={classList ({ fields: 1, 'submit-clicked': submitClicked })} disabled={isLoading}>                        
                        <input type='text' name='name'   placeholder='Как к Вам обращаться?'/>
                        <input type='text' name='address' placeholder='Адрес (доставка только в радиусе метро Курская)' required />
                        <input type='tel' pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$' name='phone'  placeholder='Номер для связи' required />
                        <input type='text' name='notes'  placeholder='Пометки'/>
                    </form>
                    <button className='submit' onClick={onSubmit}>
                        <div className='cart-highlight'></div>
                        <div className='cart-highlight2'></div>
                    </button>
                    
                </div> 
            </div>
}
