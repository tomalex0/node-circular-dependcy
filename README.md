# node-circular-dependcy
Reproducing Node Circular dependcy with ES6 Class

Based on 
https://coderwall.com/p/myzvmg/circular-dependencies-in-node-js

https://gist.github.com/lperrin/5934098

`node index.js`
`will see an error TypeError: moduleA is not a constructor`

## How to fix

### Update `a.js` with below code and do `node index.js`
```

class ModuleA {

	
}

module.exports = ModuleA;

var moduleB = require('./b');

ModuleA.prototype.hello = function(){
	console.log('hello!');
}

```

