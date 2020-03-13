import React, { useState, useRef } from 'react'
import { classList } from './util'
import './DropdownMenu.css'
import {useClickAway} from 'react-use';
const { entries } = Object


export default function DropDownMenu ({ className, items = {}, defaultText, enableSelectAll = true, activeItem, setActiveItem }) {

    //const [visible, setVisible] = useState (!defaultText ? true : false)
    const [visible, setVisible] = useState (false)

    const dropdownMenu = useRef(null)

    useClickAway(dropdownMenu, () => {
        setVisible (false)
    })

    return <>
         
        {<div ref={dropdownMenu} className={classList({ 'dropdown-menu': 1, [className]: 1, active: visible })} onClick={() => setVisible (!visible)} >
            {activeItem ? items[activeItem] : defaultText}
            <ul>
                {[
                    ...entries (items),
                    ...(enableSelectAll && activeItem) ? [[undefined, 'Выбрать всё']] : []
                ].map(([k, v]) =>
                        v !== items[activeItem]
                            ? <li className={!k ? 'all' : ''} key={String (k)} onClick={() => setActiveItem && setActiveItem (k)}>{v}</li>
                            : undefined)}
            </ul>
        </div>
        }
    </>
}
