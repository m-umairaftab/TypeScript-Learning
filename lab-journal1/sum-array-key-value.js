var array = [1, 4, 10, 12, 15, 20, 22];
var keyVal = 5;
var arrayLength = array.length;
console.log(arrayLength);
array.forEach(sumOfKeyVal);
function sumOfKeyVal(item) {
    if (item % keyVal === 0) {
        var sumOfArray = 0;
        sumOfArray += item;
        console.log();
        console.log(sumOfArray += sumOfArray);
    }
}
