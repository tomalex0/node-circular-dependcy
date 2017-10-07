// c.js
var moduleA = require('./a');
console.log(moduleA,'--in module C--');

class ModuleC {
	hello(){
		 new moduleA().hello();
	}
}

module.exports = ModuleC;