import React from 'react'
import pizzaData from './pizzaData'
import Pizza from './Pizza'
import PizzaInfo from './PizzaInfo'
import Menu from './Menu'
import SelectionPanel from './SelectionPanel'
import Radar from './Radar'

export default class App extends React.Component {
    
    state = {
        pizzaOverlayVisible: false
    }

    render() {
        return <>
                <Menu />
                <SelectionPanel />
                <Radar />
                <div className={'pizza-overlay' + (this.state.pizzaOverlayVisible ? ' visible' : '')}>
                    {pizzaData.map(p => <PizzaInfo key={p.name} {...p} />)}
                </div>
                <div className="pizzas">
                    {pizzaData.map(p => <Pizza key={p.name} {...p} />)}
                </div>
            </>
    }
}