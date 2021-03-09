const repeat = (str, n) => {
    if (n == 1) return str;
    if (n == 2) return str + str;

    let ret = ""
    for (let i = 0; i < n; i++)
    {
        ret += str
    }
    return ret
}