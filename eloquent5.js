//Chapter 5. Exercises

//==========
//Flattening

var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
var newArray = arrays.reduce(function(a, b) {
    return a.concat(b);
});

console.log(newArray);
// → [1, 2, 3, 4, 5, 6]



