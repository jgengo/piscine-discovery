is.num = function num (n) { return typeof(n) === 'number' }
is.nan = function (n) { return Object.is(n, NaN) }
is.str = function (n) { return typeof(n) === 'string' }
is.bool = function (n) { return typeof(n) === 'boolean' }
is.undef = function (n) { return typeof(n) === 'undefined' }
is.def = function (n) { return !is.undef(n) }
is.arr = function (n) { return Array.isArray(n) }
is.obj = function (n) { return typeof(n) === 'object' && n !== null && !Array.isArray(n) }
is.fun = function (n) { return typeof(n) === 'function' }
is.truthy = function (n) { return !!n }
is.falsy = function (n) { return !n }
// is.falsy = function (n) { return n === 0 || is.nan(n) || n === '' || is.undef(n) || n ===  null}