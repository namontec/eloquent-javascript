// The sum of a range
function range(start, end, interval=1){
    var outRange=[];
    //выбираем функцию сравнения
    var compare = function(n, m) {return n<=m};
    if (interval < 0) { 
        compare = function(n, m) {return n>=m}
    }
    
    for (var i=start; compare(i, end) ; i += interval) {
        outRange.push(i);
    }
    return outRange;
}

function sum(range){
    var sum=0;
    for (var i=0; i<range.length; i++) {
        sum += range[i];
    }
    return sum;
}

console.log("The sum of a range");
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


//===================
// Reversing an array
function reverseArray(array) {
    var newArray = [];
    for(i=array.length-1; i>=0; i--) {
        newArray.push(array[i])
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    var middle = Math.floor(array.length/2);
    for (i=0; i < middle; i++) {
        var temp = array[i];
        var iFromEnd=array.length-1-i;
        array[i] = array[iFromEnd];
        array[iFromEnd] = temp;
    }
}

console.log("Reverse an array");
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


//=====
// A list

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20