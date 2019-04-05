import React from 'react'
import pizzaData from './pizzaData'
import Pizza from './Pizza'
import PizzaInfo from './PizzaInfo'
import Menu from './Menu'


export default class App extends React.Component {
    
    state = {
        pizzaOverlayVisible: false
    }

    render() {
        return <>
                <Menu />
                <div className={'pizza-overlay' + (this.state.pizzaOverlayVisible ? ' visible' : '')}>
                    {pizzaData.map(p => <PizzaInfo key={p.name} {...p} />)}
                </div>
                <div>
                    {pizzaData.map(p => <Pizza key={p.name} {...p} />)}
                </div>
            </>
    }
}