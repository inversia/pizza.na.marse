import React, {useState} from 'react'
import './Noodles.css'
import { classList } from './util'



export default function Noodles ({ height, width, left, top, backgroundColor, backgroundImage, onClick, rotateOffset = '0deg', rotationDirection = 'normal', type = '', infoImage, infoTop, infoLeft, name }) { 
    
    return <div className={`pasta-item ${type}`}
                style={{ height, width, left, top, '--rotate-offset': rotateOffset, '--rotate-direction': rotationDirection }}          
                onClick={onClick}>
                {/* <h2>{name}</h2>     */}
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:backgroundImage || '', backgroundColor: backgroundColor || '' }}></div>
                <div className={`info ${type}`} style={{backgroundImage:infoImage, top:infoTop, left:infoLeft}}></div>
            </div>
}
