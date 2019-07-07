import React, {useState} from 'react'
import './Noodles.css'

export default function Noodles () { 
    
    const [currentNoodles, setCurrentNoodles] = useState (2)
    
    //classList ({ 'pasta-item': 1, 'active': })
    
    console.log(currentNoodles)
    return <div className='noodles-wrapper'>
        
        <div className='noodles'>
            <h1>Космическая лапша</h1>
            <div className='pasta-item' key={1} style={{height:"23vw", width:"23vw", left:"67vw", top:"7vw", 'animation-delay':"1.5s"}} onClick={() => setCurrentNoodles(key)}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:"url(/art/salad2.jpg)"}}></div>
            </div>

            <div className='pasta-item' key={2} style={{height:"23vw", width:"23vw", left:"31.8vw", top:"27.5vw", animationDelay:"0.5s"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:"url(/art/salad2.jpg)"}}></div>
            </div>

            <div className='pasta-item' key={3} style={{height:"19vw", width:"19vw", left:"69vw", top:"30vw", animationDelay:"2.3s"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:"url(/art/salad2.jpg)"}}></div>
            </div>

            <div className='pasta-item' key={4} style={{height:"18vw", width:"18vw", left:"53vw", top:"21.5vw", animationDelay:"0.85s"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:"url(/art/salad2.jpg)"}}></div>
            </div>

            <div className='pasta-item' key={5} style={{height:"18vw", width:"18vw", left:"16vw", top:"21vw", animationDelay:"1.9s"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:"url(/art/salad2.jpg)"}}></div>
            </div>

            <div className='pasta-item' key={6} style={{height:"18vw", width:"18vw", left:"16vw", top:"39vw", animationDelay:"5.2s"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundImage:"url(/art/salad4.jpg)"}}></div>
            </div>

            <div className='pasta-item' style={{height:"8vw", width:"8vw", left:"11vw", top:"17.5vw", animationDelay:"3.6s"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundColor:"orange", backgroundImage:"none"}}></div>
            </div>

            <div className='pasta-item' style={{height:"9vw", width:"9vw", left:"57.5vw", top:"44vw"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundColor:"ffc400", backgroundImage:"none"}}></div>
            </div>

            <div className='pasta-item' style={{height:"9vw", width:"9vw", left:"65.8vw", top:"49vw"}}>
                <div className='background'></div>
                <div className='foreground' style={{backgroundColor:"ff9100", backgroundImage:"none"}}></div>
            </div>
        </div>
    </div>
}