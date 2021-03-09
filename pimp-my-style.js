import { styles } from './data.js'
export const pimp = () => {
    
    const button = document.querySelector('button')
    const classLen = button.classList.length

    if (button.classList.contains('unpimp')) {
        button.classList.remove(styles[classLen-3])
        if (classLen == 3) { 
            button.classList.remove('unpimp')
        } 

    } else {
        button.classList.add(styles[classLen-1])
        if (classLen == styles.length) {
            button.classList.add('unpimp')
        }
    }
}