// Evens or Odds - Given an array, determine if the values that are 
// odd when added together are larger than the even values added 
// together. If they are equal say that they are "tied".

function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    
    for(var i=0; i<arr.length; i++) {
        if(arr[i] % 2 == 0) {
            totalEvens += arr[i];
        } else {
            totalOdds += arr[i];
        }
    }
    
    if(totalOdds > totalEvens) {
        return "odds are larger";  
    } else if(totalEvens == totalOdds) {
        return "tied";  
    } else {
        return "evens are larger";
    }
}
   
var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back "evens are larger"