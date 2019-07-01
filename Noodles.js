import React from 'react'
import './Noodles.css'

const Noodles = () => 
    
    <div className='noodles-wrapper'>
        <h1>Космическая лапша</h1>
        <div className='noodles'>

        <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
            <image xlinkHref="https://farm4.staticflickr.com/3165/5733278274_2626612c70.jpg" x="-25" width="150" height="100" />
            </pattern>
        </defs>
        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"/>
        </svg>

        

        </div>
    </div>

export default Noodles