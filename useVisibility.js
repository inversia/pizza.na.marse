import React, { useState, useContext, useLayoutEffect } from 'react'
import ScrollableElContext from './ScrollableElContext'

import throttle from 'lodash.throttle';
const throttleInterval = 150;

function checkVisibility(el, partial) {
    if (!el) {
        return false;
    }

    const {
        top,
        right,
        bottom,
        left,
        width,
        height,
    } = el.getBoundingClientRect();

    if (top + right + bottom + left === 0) {
        return false;
    }

    const topCheck = partial ? top + height : top;
    const bottomCheck = partial ? bottom - height : bottom;
    const rightCheck = partial ? right - width : right;
    const leftCheck = partial ? left + width : left;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    return (
        topCheck >= 0 &&
        leftCheck >= 0 &&
        bottomCheck <= windowHeight &&
        rightCheck <= windowWidth
    );
}

function findParentWithClass (element, className) {

    while (element) {
        if (element.classList.contains (className)) return element
        element = element.parentElement
    }
}

export default function useVisibility (elRef, { partial = false } = {}) {
    
    const [isVisible, setIsVisible] = useState(false);
    const scrollableElClass = useContext (ScrollableElContext)

    useLayoutEffect(() => {

        const el           = elRef.current
        const scrollableEl = findParentWithClass (el, scrollableElClass) || window

        const handleScrollOrResize = throttle(
            () => setIsVisible(checkVisibility(el, partial)),
            throttleInterval,
        );

        scrollableEl.addEventListener('scroll', handleScrollOrResize);
        window.addEventListener('resize', handleScrollOrResize);

        const visibility = checkVisibility(el, partial)

        setIsVisible(visibility)

        return () => {
            scrollableEl.removeEventListener('scroll', handleScrollOrResize);
            window.removeEventListener('resize', handleScrollOrResize);
        };
    }
  );

  return isVisible;
};