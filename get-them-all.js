export const getArchitects = () => {
    const architects = [].slice.call(document.getElementsByTagName('a'));
    const unknowns = [].slice.call(document.getElementsByTagName('span'));

    return [architects, unknowns]
    // return [architects, unknowns] 
}
export const getClassical = () => {
    const [architects, _] = getArchitects()

    let classicals = []
    let o = []
    for (const v of architects) {
        if (v.classList.contains('classical')) {
            classicals.push(v)
        } else {
            o.push(v)
        }
    }
    return [classicals, o]
}
export const getActive = () => {
    const [classicals, _] = getClassical()

    let active = []
    let o = []
    for (const v of classicals) {
        if (v.classList.contains('active')) {
            active.push(v)
        } else {
            o.push(v)
        }
    }
    return [active, o]
}
export const getBonannoPisano = () => {
    const [active, _] = getActive()

    const lefdp = document.getElementById('BonannoPisano')
    const index = active.indexOf(lefdp)

    if (index > -1) active.splice(index, 1);
    return [lefdp, active]
}


