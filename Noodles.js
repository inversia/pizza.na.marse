import React, {useState, useRef} from 'react'
import './Noodles.css'
import { classList } from './util'
import useVisibility from 'react-use-visibility'



export default function Noodles ({ height, width, left, top, backgroundColor, backgroundImage, onClick, rotateOffset = '0deg', rotationDirection = 'normal', itemType = '', infoImage, infoTop, infoLeft, name }) { 
    
    const productInfo      = useRef ()
    const isProductVisible = useVisibility (productInfo.current, { partial: true })
    

    return <div className={`pasta-item ${itemType}` + (isProductVisible ? '' : ' invisible')} 
                ref={productInfo}
                style={{ height, width, left, top, '--rotate-offset': rotateOffset, '--rotate-direction': rotationDirection }}          
                onClick={onClick}>
                
                {/* <h2>{name}</h2>     */}

                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:backgroundImage || '', backgroundColor: backgroundColor || '' }}></div>
                <div className={`info ${itemType}`} style={{backgroundImage:infoImage, top:infoTop, left:infoLeft}}></div>
            </div>
}
