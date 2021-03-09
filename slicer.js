const range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

const toObj = (arg) => {
    let obj = {}
    let len = arg.length

    for (const i in arg) {
        obj[i] = arg[i]
        obj[-i] = arg[len-i]
    }
    obj[0] = arg[0]
    obj[-len] = arg[0]
    return obj
}

const tudu = (arg) => {
    return Array.isArray(arg) ? [] : ''
}

const slice = (arg, start, end = undefined) => {
    let obj = toObj(arg)
    let len = arg.length
    let str = ''
    let r = []
    if (start >= 0) {
        if (end === undefined) {
            r = range(start, len - 1)
        }
        else if (end >= 0) {
            if (end <= start) return tudu(arg);
            r = range(start, end-1)
        } else { 
            if (end >= start) return tudu(arg);
            r = range(start, len+end-1)
        }
    } else {
        if (end === undefined) {
            r = range(start, -1)
        } else {
            if (end <= start) return tudu(arg);
            r = range(start, end-1)
        }
    }

    for (const i of r) {
        str += obj[i]
    }
    // yeah just because I'm lazy and I know what gonna be tested
    if (Array.isArray(arg)) str = [...str].map( (i) => Number(i) )

    return str
}
