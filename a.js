var moduleB = require('./b');

class ModuleA {

	hello(){
		console.log('hello!');
	}
}

module.exports = ModuleA;