const indexOf = (hay, needle, index=0) => {
    while ( index < hay.length ) {
        if (hay[index] === needle) return index;
        index++;
    }
    return -1;
}

const lastIndexOf = (hay, needle, index=0) => {
    if (index >= (hay.length-1)) index = 0;
    for ( let n = hay.length - index; n >= 0; n-- ) {
        if (hay[n] == needle) return n;
    }
    return -1
}

const includes = (hay, needle) => {
    for (const v of hay) {
        if (v == needle) return true
    }
    return false;
}