function fibonacciArray(n) {
    var fibArr = [0, 1];
    // your code here
    for (var i=0; i<n-2;i++){
       fibArr.push(fibArr[i]+(fibArr[i+1]))
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]