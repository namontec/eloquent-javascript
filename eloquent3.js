function min(x1, x2){
    if (x1<x2) return x1
    else if (x1>x2) return x2
    else if (x1==x2) return "equal"
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// Your code here.
function isEven(num){
    if (num<0) num=-num;
	if (num==0) return true
    else if (num==1) return false;
    return (isEven(num-2));
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??



// Your code here.
function counbBs(str){
    
}

function countChar(str, chr){

}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4