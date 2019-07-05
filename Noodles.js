import React from 'react'
import './Noodles.css'

const Noodles = () => 
    
    <div className='noodles-wrapper'>
        
        <div className='noodles'>
            <h1>Космическая лапша</h1>
            <div className='pasta-item' style={{height:"23vw", width:"23vw", left:"67vw", top:"7vw"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:"url(/art/salad2.jpg)"}}></div>
            </div>

            <div className='pasta-item' style={{height:"23vw", width:"23vw", left:"31.8vw", top:"27.5vw"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:"url(/art/salad3.jpg)"}}></div>
            </div>

            <div className='pasta-item' style={{height:"19vw", width:"19vw", left:"69vw", top:"30vw"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:"url(/art/salad1.jpg)"}}></div>
            </div>

            <div className='pasta-item' style={{height:"18vw", width:"18vw", left:"53vw", top:"21.5vw"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:"url(/art/salad6.jpg)"}}></div>
            </div>

            <div className='pasta-item' style={{height:"18vw", width:"18vw", left:"16vw", top:"21vw"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:"url(/art/salad4.jpg)"}}></div>
            </div>

            <div className='pasta-item' style={{height:"18vw", width:"18vw", left:"16vw", top:"39vw"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:"url(/art/salad4.jpg)"}}></div>
            </div>

            <div className='pasta-item' style={{height:"8vw", width:"8vw", left:"11vw", top:"17.5vw"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundColor:"pink"}}></div>
            </div>

            <div className='pasta-item' style={{height:"9vw", width:"9vw", left:"57.5vw", top:"44vw"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundColor:"pink"}}></div>
            </div>

            <div className='pasta-item' style={{height:"9vw", width:"9vw", left:"65.8vw", top:"49vw"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundColor:"pink"}}></div>
            </div>
        </div>
    </div>

export default Noodles