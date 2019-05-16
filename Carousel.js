import React, { useState, useEffect } from 'react'
import { Easing, rescale, InertialValue } from './anim'

// const TAU = Math.PI * 2
// const sectionAngle = (TAU / N)

export default function Carousel ({ items = [], radius = 250 }) {
        
    const N = items.length
    const TAU = Math.PI * 2
    const sectionAngle = (TAU / N)
    const [currentItem, setCurrentItem] = useState(0)

    let rotationAngle = InertialValue ({

        value: 0,
        duration: 0.5,
        easing: Easing.inOut,
        onchange (value) {
            
            for (let i = 0; i < N; i++){

                const angle = Math.PI/2 + value + sectionAngle * i

                const x = radius + radius * Math.cos(angle)
                const z = radius + radius * Math.sin(angle)

                items[i].style.transform = `translate3d(${x + 20}px, 600px, ${z - 250}px)`
            }
        }
    })

    // function setCurrentItem (i) {

    //     currentItem = i
    //     rotationAngle.set (-i * sectionAngle)
    // }

    function gotoPrevItem () {
        setCurrentItem (currentItem + 1)
    }

    function gotoNextItem () {
        setCurrentItem (currentItem - 1)
    }


    for (let i = 0; i < items.length; i++) {

        items[i].onclick = function () {
            
            setCurrentItem (i)
        }
    }

    window.onkeydown = function (e) {

        if      (e.keyCode === 37) gotoPrevItem ()
        else if (e.keyCode === 39) gotoNextItem ()
    }

    return <div>

        

    </div>

    //тут дивы через map со всей хуйнёй
}