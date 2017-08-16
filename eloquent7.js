//Exercises


//A vector type
//=============

// Your code here.
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vector) {
  return new Vector(this.x + vector.x, this.y + vector.y)
}

Vector.prototype.minus = function(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y)
}

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});


console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5



//==================
//Sequence interface
//==================

// Your code here.

function Sequence(array) {
  this.array = array.map(function(a){return a})
  this.index = 0;
}
Sequence.prototype.current = function() {
  return this.array[this.index];
}
Sequence.prototype.next = function() {
  if (this.isFinished) return null;
  this.index++;
  return this.current();
}
Sequence.prototype.resetIndex = function() {
  this.index = 0;
}
Object.defineProperty(Sequence.prototype, "isFinished", {
  get: function() {
    return (this.index >= this.array.length);
  } 
})

/*function ArraySeq(array) {
  this.sequence = new Sequence(array);
  return this.sequence;
}*/
function ArraySeq(array) {
  Sequence.call(this, array);  
}
ArraySeq.prototype = Object.create(Sequence.prototype);

function RangeSeq(n, m) {
  var newArray = [];
  for (var i = n; i<=m; i++) {
    newArray.push(i);
  }
  Sequence.call(this, newArray);
}
RangeSeq.prototype = Object.create(Sequence.prototype);

function logFive(sq) {
  for (var i = 0; i<5; i++) {
    var outNum = sq.current();
    if (outNum == null) return;
    console.log(outNum);
    sq.next();
  }

}

console.log("\nSequence interface");


logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104