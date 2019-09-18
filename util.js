/*

    classList ({ 'size-switch': 1, 'active': false, 'clicked': true})
    
    → 'size-switch clicked'

*/

import { navigate } from 'hookrouter'

const classList = classes => Object.entries (classes).filter (([k, v]) => v).map (x => x[0]).join (' ')

function decodeProps (props) {
    const result = {}
    for (const k in props) result[k] = decodeURIComponent (props[k])
    return result
}

function goToProduct (type, name, replace=false) {

    navigate (`/products/${type}/${encodeURIComponent (name)}`, replace)
}

export { classList, decodeProps, goToProduct }