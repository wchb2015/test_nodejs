// var obj = {
//     name: 'wchb'
// }

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);

// console.log(stringObj);


var  personString = '{"name":"andrew","age":25}';
var personObj = JSON.parse(personString);
console.log(typeof personObj)
console.log(personObj);