
const abs = (n) => { return n >= 0  ? n : -n }
const sign = (n) => { return n == 0 ? 0 : n/abs(n) }
const sameSign = (x, y) => { return sign(x) == sign(y) ? true : false }