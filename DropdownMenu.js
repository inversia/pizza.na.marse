import React, { useState } from 'react'
import { classList } from './util'
import './DropdownMenu.css'
const { entries } = Object

export default function DropDownMenu ({ className, items = {}, defaultText, enableSelectAll = true, activeItem, setActiveItem }) {

    const [visible, setVisible] = useState (!defaultText ? true : false)

    return <>
         
        {<div className={classList({ 'dropdown-menu': 1, [className]: 1, active: visible })} onClick={() => setVisible (!visible)} >
            {activeItem ? items[activeItem] : defaultText}
            <ul>
                {[
                    ...entries (items),
                    ...(enableSelectAll && activeItem) ? [[undefined, 'Выбрать всё']] : []
                ].map(([k, v]) =>
                        v !== items[activeItem]
                            ? <li className={!k ? 'all' : ''} key={String (k)} onClick={() => setActiveItem (k)}>{v}</li>
                            : undefined)}
            </ul>
        </div>
        }
    </>
}
