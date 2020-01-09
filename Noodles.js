import React, {useState, useRef, useContext } from 'react'
import './Noodles.css'
import { classList } from './util'
import useVisibility from 'react-use-visibility'
import {LayoutModeContext}  from './LayoutModeContext'

const toStyle = ({ position, size }) => ({
    height: size + 'vw',
    width:  size + 'vw', 
    left:   position[0] + 'vw', 
    top:    position[1] + 'vw'
})

export default function Noodles ({ height, width, left, top, layout, infoLayout, backgroundColor, backgroundImage, onClick, rotateOffset = '0deg', rotationDirection = 'normal', itemType = '', infoImage, infoTop, infoLeft, name }) { 
    
    const productInfo      = useRef ()
    const isProductVisible = useVisibility (productInfo.current, { partial: true })
    const { layoutMode } = useContext (LayoutModeContext)
    const { position: infoPosition, size: infoSize } = infoLayout[layoutMode]
    
    //<div class={classList ({ 'cart-items': 1, 'empty': !cartItems.length })}>

    return <div className={classList({[`pasta-item ${itemType}`] : 1, 'invisible' : isProductVisible, 'mobile' : layoutMode})} 
            
                ref={productInfo}
                style={{ ...toStyle (layout[layoutMode]), 
                         '--rotate-offset': rotateOffset, 
                         '--rotate-direction': rotationDirection }}          
                onClick={onClick}>

            {/* <div className={classList({[`pasta-item ${itemType}`] : 1, ' invisible' : isProductVisible})}></div> */}
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:`url(/art/product.${backgroundImage}.min.jpg` || '', backgroundColor: backgroundColor || '' }}></div>
                {/* <div className={`info ${itemType}`} style={{backgroundImage:infoImage, ...toStyle (infoLayout[layoutMode]) }}></div> */}
            </div>
}
