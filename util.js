/*

    classList ({ 'size-switch': 1, 'active': false, 'clicked': true})
    
    → 'size-switch clicked'

*/

const classList = classes => Object.entries (classes).filter (([k, v]) => v).map (x => x[0]).join (' ')

export { classList }