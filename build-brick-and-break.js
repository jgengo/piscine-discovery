const gimme_a_brick = (id) => {
    const elem = document.createElement('div')
    elem.id = `brick-${id+1}`
    if (((id+1) % 3) == 2) elem.dataset.foundation = true
    document.body.append(elem)
}

export const build = (amount) => {
    let i = 0;

    let interval = setInterval( () => {
        gimme_a_brick(i)

        i++;
        if(i === amount){
            clearInterval(interval)
        }

    }, 100, i);
}
export const repair = (...ids) => {
    ids.forEach( (id) => {
        const elem = document.getElementById(id)
        if (elem != undefined) { elem.setAttribute('data-repaired', elem.hasAttribute('data-foundation') ? 'in progress' : true ) }
    })

}
export const destroy = () => {
    const elems = document.querySelectorAll('div[id^="brick"]')
    elems[elems.length-1].remove()
}