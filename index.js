

// main.js
const moduleA = require('./a');
console.log(moduleA,'--in index.js--');

const moduleB = require('./b');

new moduleB().hello();