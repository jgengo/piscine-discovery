const cutFirst = (a) => a.slice(2);
const cutLast = (a) => a.slice(0, -2);
const cutFirstLast = (a) => a.slice(2, -2);

const keepFirst = (a) => a.slice(0, 2)
const keepLast = (a) => a.slice(-2)
const keepFirstLast = (a) => a.length > 3 ? keepFirst(a) + keepLast(a) : a
  