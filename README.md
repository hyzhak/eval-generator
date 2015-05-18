# jasmine-es6-generator
Evaluate generators in Jasmine unit tests suits. Brings ES6 style for async unit tests


## Usage

```javascript
var testGen = require('jasmine-es6-generator');

it('should done', testGen(function *() {
    var res = yield someFn();
    expect(res).toEqual(1234);
}));
	
```