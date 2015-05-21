console.log("%c Math errors: ", "color:#4d90fe;");
console.log("(0.1 + 0.2) === 0.3 expected to be true but the result is: ")
console.log((0.1 + 0.2 ) === 0.3);
console.log("Solution: if you need precise calculations (for ex. money calculation) multiply number by 100");
console.log("(0.1*100 + 0.2*100) === 0.3*100 the result is: ")
console.log((0.1*100 + 0.2*100 ) === 0.3*100);
console.log('%c Converting string to a number: ', "color:#4d90fe;" );
console.log('+"42" = ', +"42" );
console.log('parseInt("42") = ', parseInt("42") );
console.log('Number("42") = ', Number("42") );
console.log('+"40" + +"2" = ', +"40" + +"2" );
console.log("%c Type coercion: ", "color:#4d90fe;");
console.log('42 == "42"', 42 == "42");
console.log('42 === "42"', 42 === "42");
var a = {};
console.log('var a = {}; !!a',!!a );
var b = null;
console.log('var b = null; !!b',!!b );
console.log("%c Reflection: ", "color:#4d90fe;");
console.log('var a = {}; typeof a', typeof a );
a = "";
console.log('a = ""; typeof a', typeof a );
a = 2;
console.log('a = 2; typeof a', typeof a );
a = 2.5;
console.log('b;  typeof a', typeof b );
a = function() {};
console.log('a = function() {};  typeof a', typeof a );
a.test = 20;
console.log('a.test = 20; typeof a', typeof a);
console.log('a.test = 20;  typeof a.test', typeof a.test);
console.log(' typeof a.toString', typeof a.toString);
console.log('typeof a.constructor (any property on prototype chain)', typeof a.constructor);
console.log('typeof null %c Unreliable!', 'color:red;', typeof null);
a = null;
console.log('a = null; a === null', a === null);
console.log('typeof [] %c Unreliable!', 'color:red;', typeof [])
console.log('typeof [].sort %c Unreliable!', 'color:red;', typeof [].sort)
console.log('typeof [].sort ', typeof [].sort);
console.log('Object.prototype.toString.call([])', Object.prototype.toString.call([]) );
a = {};
a.test=0;
console.log('a={}; a.test=0; a.hasOwnProperty("test");',a.hasOwnProperty("test") );
console.log('a={}; a.test=0; a.hasOwnProperty("constructor");',a.hasOwnProperty("constructor") );
console.log('a={}; a.test=0; a.hasOwnProperty("toString");', a.hasOwnProperty("toString") );



