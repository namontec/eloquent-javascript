// The sum of a range
function range(start, end, interval = 1) {
  var outRange = [];
  //выбираем функцию сравнения
  var compare = function (n, m) {
    return n <= m
  };
  if (interval < 0) {
    compare = function (n, m) {
      return n >= m
    }
  }

  for (var i = start; compare(i, end); i += interval) {
    outRange.push(i);
  }
  return outRange;
}

function sum(range) {
  var sum = 0;
  for (var i = 0; i < range.length; i++) {
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
  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  var middle = Math.floor(array.length / 2);
  for (i = 0; i < middle; i++) {
    var temp = array[i];
    var iFromEnd = array.length - 1 - i;
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


//=======
// A list

function arrayToList(array) {
  var list = null;
  for (i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list
    };
  }
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  return list = {
    value: element,
    rest: list
  };
}

function nth(list, number) {
  var i = 0;
  for (var node = list; node; node = node.rest) {
    if (i == number) {
      return node.value
    }
    i++;
  }
  return undefined;
}

function nth_v2(list, number) {
  for (var i = 0; i < number; i++) {
    if (list.rest == null) return undefined;
    list = list.rest;
  }
  return list.value;
}

console.log("A list");
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


//===============
//Deep comparison
function deepEqual_v1(obj1, obj2) {

  if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)) {
    //если оба объекты, то продолжаем - смотрим сколько полей у каждого объекта;
    if (countProperties(obj1) == (countProperties(obj2))) {
      //если равны > преверяем подробнее
      for (var prop in obj1) {
        //если поля есть у обоих обхектов, то сравниваем
        if (prop in obj2) return deepEqual(obj1[prop], obj2[prop])
        else return false;
      }
    } else return false;
  } else return obj1 === obj2; //если простые переменные - просто сравниваем
}

function deepEqual(o1, o2) {
  if ((typeof o1 == "object" && o1 != null) && (typeof o2 == "object" && o2 != null)) {

    if (countProperties(o1) != (countProperties(o2))) return false;
    for (var prop in o1) {
      if (prop in o2) {
        if (!(deepEqual(o1[prop], o2[prop]))) return false;
      } else return false;
    }
    return true;
  } else return o1 === o2;
}

function countProperties(obj) {
  var i = 0;
  for (var prop in obj) {
    i++
  }
  return i;
}

console.log("Deep comparision");
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

var xx={here: {is: "an"}, object: 2};
var yy={here: {is: "an"}, object: 2};
console.log("Final: "+ deepEqual(xx,yy));