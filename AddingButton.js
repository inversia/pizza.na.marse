import React, { useContext, useRef, useState, useEffect, useLayoutEffect } from 'react'
import { CartContext } from './CartContext'
import useVisibility from 'react-use-visibility'
import { ScrollableElContext, useScrollableEl } from './ScrollableElContext'
import './AddingButton.css'

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

function useVisibility2 (elRef, { partial = false } = {}) {
    
    const [isVisible, setIsVisible] = useState(false);
    const getScrollableEl = useScrollableEl ()

    useLayoutEffect(() => {

        const el           = elRef.current        
        const scrollableEl = getScrollableEl (el)

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

export default function AddingButton ({ productType, name, isLarge, backgroundImage, price}) {

    const { addToCart }         = useContext (CartContext)
    const buttonRef             = useRef ()
    const isVisible             = useVisibility2 (buttonRef, { partial: true })

    return <button className='adding-button' ref={buttonRef} onClick={() => addToCart ({ productType, name, isLarge, backgroundImage, price})}>     
                <span>ЗАКАЗАТЬ</span>
                <div className={'highlight ' + (isVisible ? '' : 'invisible')}></div>
                <div className={'highlight2 ' + (isVisible ? '' : 'invisible')}></div>
            </button>
}

