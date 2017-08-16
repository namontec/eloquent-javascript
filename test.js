function MyArray() { }
MyArray.prototype = [];

var arr = new MyArray();
arr.push(1, 2, 3);
console.log(arr.length);