const { cos, sin, PI } = Math

import React, { useState, useRef, useLayoutEffect } from 'react'
import { Easing, rescale, InertialValue } from './anim'
import './Carousel.css'
import useComponentSize from '@rehooks/component-size'

function loopNumber (i, length) {
    return (length + (i % length)) % length
}

function useInertialValue (initialValue, config) {

    // тут хранится текущее значение
    const [currentValue, setCurrentValue] = useState (initialValue)
    const [targetValue,  setTargetValue]  = useState (initialValue)

    // вывести значение в React DevTools
    // useDebugValue ('угол: ' + currentValue)

    // создает коробочку со ссылкой на любой объект, но лишь в первый раз, когда вызываешь эту функцию.
    // Когда обращаешься к ней во второй раз, то она возвращает созданную ранее коробочку
    // по сути useRef - это объявление переменной для компонента, с областью видимости в пределах времени жизни компонента
    const ref = useRef ()  // мы не передаем изначальное значение прямо сюда чтобы не нагружать процесс при перерендеринге

    if (!ref.current)      // код выполняется, если значение ref еще не создано
         ref.current = InertialValue ({ ...config, value: initialValue, onchange (value) { setCurrentValue (value) } })

    return [
        currentValue,
        targetValue,
        newTargetValue => {
            setTargetValue (newTargetValue)
            ref.current.set (newTargetValue) // функция для задания новой цели анимации InertialValue
        }
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

export default function Carousel ({ currentItem, setCurrentItem, children = [], perspectiveFactor = 1.63, className = '', composition = [] }) {

    const el                 = useRef ()
    const { width, height }  = useComponentSize (el)
    const radius             = width / 2

    const N            = children.length
    const TAU          = PI * 2
    const sectionAngle = (TAU / N)

    // TODO: добавить враппинг, чтобы currentItem был в диапазоне [0, N-1]
    //       взять с inversia.space функцию для wrapping с учетом отрицательных чисел
    //
    // function gotoPrevItem () { setCurrentItem (currentItem + 1) }
    // function gotoNextItem () { setCurrentItem (currentItem - 1) }

    // создает «коробочку» связанную с компонентом (его временем жизни), в которой может лежать что-либо
    const itemsRef = useRef ()

    const [intermediateRotationAngle, rotationAngle, setRotationAngle] = useInertialValue (0, { duration: 0.8, easing: Easing.inOut })

    const itemToAngle = i => (N - i) * sectionAngle
    const round = n => Number (n.toFixed (3))

    // вызывает коллбек перед фактическим рендером компонента (но после создания DOM дерева)
    useLayoutEffect (() => {

        const angleFrom = rotationAngle
        const angleTo   = itemToAngle (currentItem)
        const offset    = loopNumber (round (angleTo - angleFrom), round (TAU))
        const angle     = offset > PI ? angleFrom - (TAU - offset) : angleFrom + offset

        // if (offset != 0) {
        //     console.log ({ angleFrom, angleTo })
        //     console.log ({ offset, angle }, '\n')
        // }

        setRotationAngle (round (angle))

        for (let i = 0; i < N; i++){

            const angle = PI/2 + intermediateRotationAngle + sectionAngle * i

            const x = radius + radius * cos (angle)
            const z = radius + radius * sin (angle)

            // const depth = rescale (sin (angle), [-1, 1], [0.5, 1], Easing.out)

            const el = itemsRef.current.children[i]

            el.style.transform = `translate3d(${x}px, ${height / 2}px, ${z - radius}px)`
        }
    })

    const [currentPerspectiveFactor, setPerspectiveFactor] = useState (perspectiveFactor)

    return  <div ref={el} className={`carousel ${className}`} style={{perspective: (height * currentPerspectiveFactor) + 'px'}}>

                <svg className="circle">
                    <radialGradient id="carouselRadialGradient">
                        <stop offset="29%" stopColor="transparent"/>
                        <stop offset="100%" stopColor="black"/>
                    </radialGradient>
                    <circle cx="50%" cy="50%" r={radius + 'px'} />
                </svg>

                <div ref={itemsRef} className="items">
                    {children.map ((child, i) =>
                        <div className="item" key={i} onClick={() => setCurrentItem (i)}>{child}</div>
                    )}
                </div>

                <div className='item-composition'>{composition[currentItem]}</div>

{/*
                <input style={{width:'60%'}} type="range" min="0" max="10" step="0.01" value={currentPerspectiveFactor} onChange={e => setPerspectiveFactor (event.target.value)}></input>
                <span style={{color:'white'}}>{currentPerspectiveFactor}</span> */}

                {/* <div>{'Rotation angle ' + rotationAngle}</div>
                <div>{'Intermediate rotation angle ' + intermediateRotationAngle}</div>
                <div>{'Section angle ' + sectionAngle}</div>
                <div>{'Current item '   + currentItem} </div> */}

            </div>

    // window.onkeydown = function (e) {

    //     if      (e.keyCode === 37) gotoPrevItem ()
    //     else if (e.keyCode === 39) gotoNextItem ()
    // }

}