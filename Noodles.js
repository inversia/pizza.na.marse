import React, {useState} from 'react'
import './Noodles.css'
import { classList } from './util'



export default function Noodles ({ height, width, left, top, backgroundColor, backgroundImage, onClick, rotateOffset = '0deg', rotationDirection = 'normal' }) { 
    
    return <div className='pasta-item'
                style={{ height, width, left, top, '--rotate-offset': rotateOffset, '--rotate-direction': rotationDirection  }}          
                onClick={onClick}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:backgroundImage || '', backgroundColor: backgroundColor || '' }}></div>
            </div>
}
