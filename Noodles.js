import React from 'react'
import './Noodles.css'

const Noodles = () => 
    
    <div className='noodles-wrapper'>
        
        <div className='noodles'>
            <h1>Космическая лапша</h1>
            <div className='pasta-item' style={{height:"25vw", width:"25vw", left:"10vw", top:"5vw"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:"url(/art/salad5.jpg)"}}></div>
            </div>
        </div>
    </div>

export default Noodles