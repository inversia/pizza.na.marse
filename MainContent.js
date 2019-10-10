import React, { useState, useContext } from 'react'

import SelectionPanel from './SelectionPanel'
import Carousel from './Carousel'
import Pizza from './Pizza'
import Noodles from './Noodles'
import AddingButton from './AddingButton'
import NoodlesBackgroundMobile from './NoodlesBackgroundMobile'
import Footer from './Footer'
import {goToProduct} from './util'
import pizzaData from './data/pizza'
import saladsData from './data/salads'
import noodlesData from './data/noodles'


export default function MainContent ({ isMobile, pizzaTypeSelected, setPizzaTypeSelected, layoutMode }) {
    
    const [selectedPizzas, setSelectedPizzas] = useState ({})       // это заюзать потом, для половинчатых пицц
    const isMix = pizzaTypeSelected === 'mix'

    const [currentSalad, setCurrentSalad] = useState (0)

    return (<>
    
        <div className='cosmos-zone-one-wrapper'>
            
            {!isMobile && <SelectionPanel type={pizzaTypeSelected} onSelect={ type => setPizzaTypeSelected (type === pizzaTypeSelected ? undefined : type) }/> }

            <div className='pizzas'>
                {pizzaData.map(p => <Pizza checked={selectedPizzas[p.name] || false}
                                        key={p.name}
                                        {...p}
                                        price={p.price[1]}
                                        onClick={
                                            () => {
                                                goToProduct ('pizzas', p.name)

                                                // if (isMix) {
                                                //     setSelectedPizzas ({ ...selectedPizzas, [p.name]: !selectedPizzas[p.name] })    // это заюзать потом, для половинчатых пицц
                                                // } else {
                                                //     goToProduct ('pizzas', p.name)
                                                // }
                                            }
                                        } />
                                )
                }
            </div>

            {/*<div className='pizza-button' style={isMix ? { bottom: 0, opacity: 1 } : { bottom: 'calc(-1*var(--height))', opacity: 0 }}>
                <div className='hint'>
                    Выберите 2 понравившиеся пиццы, кликнув на них
                </div>
                <div className='order'></div>
            </div>*/}
        </div>

        <div className='cosmos-zone-two-wrapper'>
            <div className='salads-carousel-wrapper'>
                <h1>Внеземные салаты</h1>
                <Carousel currentItem={currentSalad} setCurrentItem={setCurrentSalad} perspectiveFactor='3.37' className='salads' composition={saladsData.composition}>
                    { saladsData.map ((salad, i) => (
                            <>
                                <div className='pic' style={{backgroundImage: salad.backgroundImage}} />
                                <div className='title'>{salad.name}</div>
                            </>
                    )) }
                </Carousel>
                {/* <div className='salad-price'>{saladsData[currentSalad].price}</div> */}
                <ul className='salad-composition'>{saladsData[currentSalad].composition.map(x => <li>{x}</li>)}</ul>
                {/* <div className='salad-price'>{saladsData[currentSalad].price}</div> */}
                <div className='salad-add-button'>
                    <AddingButton  productType={'salads'} name={saladsData[currentSalad].name} backgroundImage={saladsData[currentSalad].backgroundImage} price={saladsData[currentSalad].price}/>
                </div>
            </div> 
        </div>
        {/* {console.log (layoutMode)} */}
        <div className='noodles-wrapper'>
            <h1>Космическая паста</h1>
            <div className='noodles-container'>

                {isMobile && <div className='bg'><NoodlesBackgroundMobile /></div>}

                {noodlesData.map (noodles => (<Noodles {...noodles} 
                                                    key={noodles.name} 
                                                    onClick={() => {
                                                        if(noodles.itemType !== 'decoration') {
                                                            goToProduct ('noodles', noodles.name)
                                                        }
                                                    }
                                                }/>))}   
            </div>
        </div>
        <Footer />
    </>)
}
