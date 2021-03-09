const words = (str) => { return str.split(' ') }
const sentence = (arr) => { return arr.join(' ') }
const yell = (str) => { return str.toUpperCase() }
const whisper = (str) => { return `*${str.toLowerCase()}*` }
const capitalize = (str) => { return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`}