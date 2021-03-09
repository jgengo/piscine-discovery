import { colors } from './data.js'

export const generateClasses = () => {
    const style = document.createElement('style')
    style.innerHTML = '' 
    colors.forEach( v => style.innerHTML += `.${v} { background: ${v}; }\n`)
    document.querySelector('head').append(style)
}
export const generateColdShades = () => {
    const contains = [ 'aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']
    const filteredColors = colors.filter( v => {
        for (const c of contains) {
            if (v.includes(c)) return true;
        } 
        return false
    })
    filteredColors.forEach ( v => {
        const div = document.createElement('div')
        div.classList.add(v)
        div.textContent = v
        document.body.append(div)
    })
}
export const choseShade = (event) => {
    const elems = document.getElementsByTagName('div')
    for (const elem of elems) {
        elem.className = '';
        elem.classList.add(event)
    }
}