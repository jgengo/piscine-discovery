
const trunc = (a) => (a) - (a%1)
const ceil = (a) => Math.sign(a) === -1 ? trunc(a) : (a+Math.sign(a)) - (a%1)
const floor = (a) => Math.sign(a) === -1 ? (a-1) - (a%1) : trunc(a)
const round = (a) => (Math.abs(a)%1) < 0.5 ? Math.sign(a) * trunc(Math.abs(a)) : Math.sign(a) * ceil(Math.abs(a))
