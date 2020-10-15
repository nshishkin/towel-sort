
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultArr = [];
  if (arguments.length === 0 || matrix === []){
    return [];
  }
  for (let i = 0; i < matrix.length; i += 1){
    if (!Array.isArray(matrix[i])){
        resultArr.push(matrix[i]);
    } else{
      if (i % 2 === 0){
        resultArr = resultArr.concat(matrix[i]);
      } else{
        resultArr = resultArr.concat(matrix[i].reverse());
      }
    }
  }
  return resultArr;
}
