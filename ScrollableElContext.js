import { createContext, useContext } from 'react'

const ScrollableElContext = createContext (window)

function findParentWithClass (element, className) {

    while (element) {
        if (element.classList.contains (className)) return element
        element = element.parentElement
    }
}

function useScrollableEl () {

    const scrollableElClass = useContext (ScrollableElContext)

    return el => findParentWithClass (el, scrollableElClass) || window
}

export { useScrollableEl, ScrollableElContext }