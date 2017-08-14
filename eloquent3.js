var cross=""
for (var i=0; i<7; i++)
{
    cross +="#";
    console.log(cross);
}

for (var i=1; i<=100; i++)
{
    var out = String(i);
    //if (i%3==0) out="Fizz"
    //else if (i%5==0) out="Buzz"
    if (i%3==0 || i%5==0) out="FizzBuzz"
    console.log(out);
}

var checkBoard = function(width, height){
    for (var h=0; h<height; h++){
        if (h%2 ==0) var line=""
            else var line=" ";
        for (var w=0; w<height; w++){
            line += "# ";
        }
        console.log(line);
    }
}

checkBoard(15,18);