import React, { useState, useRef, useLayoutEffect, useDebugValue } from 'react'
import { Easing, rescale, InertialValue } from './anim'
import './Carousel.css'
import useComponentSize from '@rehooks/component-size'

function useInertialValue (initialValue, config) {

    // тут хранится текущее значение
    const [currentValue, setCurrentValue] = useState (initialValue)

    // вывести значение в React DevTools
    useDebugValue ('угол: ' + currentValue)

    // создает коробочку со ссылкой на любой объект, но лишь в первый раз, когда вызываешь эту функцию.
    // Когда обращаешься к ней во второй раз, то она возвращает созданную ранее коробочку
    // по сути useRef - это объявление переменной для компонента, с областью видимости в пределах времени жизни компонента
    const ref = useRef ()  // мы не передаем изначальное значение прямо сюда чтобы не нагружать процесс при перерендеринге

    if (!ref.current)      // код выполняется, если значение ref еще не создано
         ref.current = InertialValue ({ ...config, value: initialValue, onchange (value) { setCurrentValue (value) } })

    return [
        currentValue,
        newTarget => ref.current.set (newTarget) // функция для задания новой цели анимации InertialValue
    ]
}

// пример того, как можно сделать useState, если у нас есть только useRef
// function useState_ (initialValue) {

//     const ref = useRef (initialValue)

//     return [ref.current, newValue => {
//         ref.current = newValue
//         /* ПЕРЕРЕНДЕРИТЬ_КОМПОНЕНТ () */
//     }]
// }

// пример того, как можно сделать useRef, если у нас есть только useState
// function useRef_ (initialValue) { return useState ({ current: initialValue })[0] }


export default function Carousel ({ children = [] }) {

    const carouselEl   = useRef ()
    const carouselSize = useComponentSize (carouselEl)

    const N            = children.length
    const TAU          = Math.PI * 2
    const sectionAngle = (TAU / N)

    const [currentItem, setCurrentItem] = useState (0)

    function gotoPrevItem () { setCurrentItem (currentItem + 1) }
    function gotoNextItem () { setCurrentItem (currentItem - 1) }

    // создает «коробочку» связанную с компонентом (его временем жизни), в которой может лежать что-либо
    const itemsRef = useRef ()

    const [rotationAngle, setRotationAngle] = useInertialValue (0, { duration: 0.5, easing: Easing.inOut })

    // вызывает коллбек перед фактическим рендером компонента (но после создания DOM дерева)
    useLayoutEffect (() => {

        setRotationAngle (-currentItem * sectionAngle)

        const itemsEl = itemsRef.current
        const radius = itemsEl.offsetWidth / 2
        const y      = itemsEl.offsetHeight / 2

        for (let i = 0; i < N; i++){

            const angle = Math.PI/2 + rotationAngle + sectionAngle * i

            const x = radius + radius * Math.cos (angle)
            const z = radius + radius * Math.sin (angle)

            itemsEl.children[i].style.transform = `translate3d(${x}px, ${y}px, ${z - radius}px)`
        }
    })

    const [perspectiveFactor, setPerspectiveFactor] = useState (2.6)

    // alert(carouselSize.width)

    return  <div ref={carouselEl} className="carousel" style={{perspective: (carouselSize.height * perspectiveFactor) + 'px'}}>

                <svg className="circle">
                    <circle cx="50%" cy="50%" r="50%" stroke="#5d7e82" strokeWidth="2"/>
                </svg>

                <div ref={itemsRef} className="items">
                    {children.map ((child, i) =>
                        <div className="item" key={i} onClick={() => setCurrentItem (i)}>{child}</div>
                    )}
                </div>

                <input style={{width:'60%'}} type="range" min="0" max="10" step="0.01" value={perspectiveFactor} onChange={e => setPerspectiveFactor (event.target.value)}></input>
                <span style={{color:'white'}}>{perspectiveFactor}</span>
            </div>

    // window.onkeydown = function (e) {

    //     if      (e.keyCode === 37) gotoPrevItem ()
    //     else if (e.keyCode === 39) gotoNextItem ()
    // }

}