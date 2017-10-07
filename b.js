
// b.js
var moduleC = require('./c');


class ModuleB {
	hello(){
		new moduleC().hello();
	}
}

module.exports = ModuleB;