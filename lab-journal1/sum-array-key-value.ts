const array : number[] = [1,4,10,12,15,20,22]
const keyVal : number = 5
const arrayLength : number = array.length
console.log(arrayLength)
array.forEach(sumOfKeyVal)
function sumOfKeyVal  (item){
    if (item % keyVal === 0) {
        let sumOfArray : number = 0
        sumOfArray += item
        console.log();
        console.log(sumOfArray+=sumOfArray);
        
        
    }
}

