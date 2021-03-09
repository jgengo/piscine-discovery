const chunk = (arr, size) => {
    let res = []

    for ( let i = 0; i < arr.length ;i++ ) {
        res.push(arr.slice(0,size))
        arr = arr.slice(size)
        if ( arr.length < size && arr.length != 0 ) {
            res.push(arr)
            break;
        }
    }

    return res 
}