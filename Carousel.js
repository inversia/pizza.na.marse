import React, { useState, useRef, useEffect } from 'react'
import { Easing, rescale, InertialValue } from './anim'
import './Carousel.css'

// const TAU = Math.PI * 2
// const sectionAngle = (TAU / N)

export default function Carousel ({ children = [], radius = 250 }) {

    const N            = children.length
    const TAU          = Math.PI * 2
    const sectionAngle = (TAU / N)

    const [rotationAngle, setRotationAngle] = useState (0)
    const [currentItem,   setCurrentItem]   = useState (0)

    function gotoPrevItem () { setCurrentItem (currentItem + 1) }
    function gotoNextItem () { setCurrentItem (currentItem - 1) }

    // создает «коробочку» связанную с компонентом (его временем жизни), в которой может лежать что-либо
    const itemsRef                = useRef ()
    const rotationAngleInertiaRef = useRef ()

    // вызывает коллбек при фактическом рендере компонента (после создания DOM дерева)
    useEffect (() => {

        // Создаём IntertialValue если он ещё не был создан, кладём его в «коробочку» rotationAngleRef,
        // где он будет храниться до конца жизни компонента
        //
        if (!rotationAngleInertiaRef.current) {
            rotationAngleInertiaRef.current = InertialValue ({
                value: 0,
                duration: 0.5,
                easing: Easing.inOut,
                onchange (value) { setRotationAngle (value) }
            })
        }

        rotationAngleInertiaRef.current.set (-currentItem * sectionAngle)

        const itemsEl = itemsRef.current
        const y = itemsEl.offsetHeight / 2

        for (let i = 0; i < N; i++){

            const angle = Math.PI/2 + rotationAngle + sectionAngle * i

            const x = radius + radius * Math.cos (angle)
            const z = radius + radius * Math.sin (angle)

            itemsEl.children[i].style.transform = `translate3d(${x + 20}px, ${y}px, ${z - 250}px)`
        }
    })

    return  <div className="carousel">

                <svg className="circle">
                    <circle cx="50%" cy="50%" r="50%" stroke="#5d7e82" strokeWidth="2"/>
                </svg>

                <div ref={itemsRef} className="items">
                    {children.map ((child, i) =>
                        <div className="item" key={i} onClick={() => setCurrentItem (i)}>{child}</div>
                    )}
                </div>

            </div>

    // window.onkeydown = function (e) {

    //     if      (e.keyCode === 37) gotoPrevItem ()
    //     else if (e.keyCode === 39) gotoNextItem ()
    // }

}