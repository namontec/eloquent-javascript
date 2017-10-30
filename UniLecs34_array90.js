//Анонс задачи 34: Повернуть матрицу (решение будет в среду).
//Дана числовая матрица NxN. Напишите функцию, поворачивающую матрицу на 90 градусов. 
//Не путать с транспонированием.

function RotateMatrix90(inMatrix) {
  var MatrixHeight = inMatrix.length;
  var MatrixWidth = inMatrix[0].length;

  var outMatrix = [];
  //Initialise outMatrix
  for (var i = 0; i < MatrixHeight; i++) {
    outMatrix[i] = [];
  }

  for (var y = 0; y < MatrixHeight; y++ ) {
    for (var x = 0; x < MatrixWidth; x++) {
      outMatrix[x][MatrixWidth - y -1] = inMatrix[y][x];
    }
  }
  return outMatrix;
}

function PrintMatrix(inMatrix) {
  for (var i = 0; i < inMatrix.length; i++) {
    console.log (inMatrix[i]);
  }
}

var newMatrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log("In:");
PrintMatrix(newMatrix);
var result = RotateMatrix90(newMatrix); 
console.log("Out:");
PrintMatrix(result);


var newMatrix2 = [[1,2,3],[4,5,6],[7,8,9]];
console.log("In:");
PrintMatrix(newMatrix2);
var result2 = RotateMatrix90(newMatrix2); 
console.log("Out:");
PrintMatrix(result2);