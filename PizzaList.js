import React from 'react'

export default function PizzaList ({name}){
    return (
        <div className='pizza-list'>
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    )
}