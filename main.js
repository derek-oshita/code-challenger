let array1 = [2, 7, 11, 15]; 
let target1 = 9; 

const twoSum = (arr, target) => {
    let result = new Map(); 

    for (let i = 0; i < arr.length; i++) {
        let currentVal = arr[i]; 
        let difference = target - currentVal; 

        // do we have what we're looking for? 
        if (result.has(difference)) {
            return [result.get(difference), i]
        } else {
            result.set(currentVal, i)
        }
    }

    // if we make it to the end, it does not exist
    return 'No two values equate to the target...'
}

console.log(twoSum(array1, target1)); 