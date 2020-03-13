const { min, sin, cos } = Math

// --------------------------------------------------

export const Easing = {

    linear: t => t,

    exp: n => t => t**n,

    in:     t => t**2,
    out:    t => 1 - (1.0 - t)**2,
    inOut:  t => (t < 0.5)
                    ? 2.0 * (t**2)
                    : 2.0 * t * (2.0 - t) - 1.0,

    inElastic: t => (.04 - .04 / t) * sin(25 * t) + 1,
    inElastic2: t => (0.04 - 0.04 / t) * cos(25 * t) + 1,

    easeOutCubic: t => (--t) * t * t + 1,
    easeInOutQuint: t => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t,
}

// --------------------------------------------------

export function rescale (x, from, to, easing=Easing.linear) {

    const t = (x - from[0]) / (from[1] - from[0])
    return to[0] + ((to[1] - to[0]) * easing (t))
}

// --------------------------------------------------

export function InertialValue ({ value    = 0,
                                 duration = 0.2,
                                 easing   = Easing.inOut,
                                 onchange = value => {} }) {

    let animating      = false

    let startValue     = value
    let endValue       = value
    let currentValue   = value

    let animFrame, startTime, animTime, travel

    function step () {

        animTime = Date.now () - startTime
        travel   = min (1.0, (animTime / (duration * 1000.0)))

        if (travel < 1.0) {

            animating    = true
            currentValue = rescale (travel, [0, 1], [startValue, endValue], easing)
            animFrame    = requestAnimationFrame (step)

        } else {

            animating    = false
            currentValue = endValue
        }

        onchange (currentValue)
    }

    onchange (currentValue)

    return {

        // get value ()     { return currentValue },
        // get animating () { return animating    },

        set (newEndValue) {

            if (endValue !== newEndValue) {

                startTime  = Date.now ()
                startValue = currentValue
                endValue   = newEndValue

                if (!animating) animFrame = requestAnimationFrame (step)
            }
        },

        // abort () {
        //     if (animFrame !== undefined) {
        //         cancelAnimationFrame (animFrame)
        //         animFrame = undefined
        //     }
        //     animating = false
        // },

        // step
    }
}
