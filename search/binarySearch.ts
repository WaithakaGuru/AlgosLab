const searchArray = [1,3,4,5,6,7,8,9,13,34,35,67,88]
function linearSearch(arr: number[], target: number){
    for(let i: number = 0; i< arr.length; i++) {
        if(arr[i] == target) return `\tTarget found at index: ${i}\n`
    }
    return `\tTarget not found!!`
}

function binarySearch(arr: number[], target: number) {
    let left = 0, right= arr.length-1, iterations: number = 0
    while(right >= left){
        let midVal = (left + right)/2;
        let mid = Math.ceil(midVal);
        console.log(`\tleft-> ${left}:  right-> ${right}: midpoint-> ${mid}`);
        if(target === arr[mid]) return  `\tTotal iterations Made: ${iterations+1}\n\tTarget found at index: ${mid}\n`;
        if(target < arr[mid]) right = mid - 1;
        else left = mid + 1;
        iterations++
    }
    return `\t Total iterations made: ${iterations}\n\tTarget not found!!\n`;
}

/**Testing Bay */
console.log("Test for Binary Search");
console.log(binarySearch(searchArray, 14));
console.log(binarySearch(searchArray, 13));
console.log(binarySearch(searchArray, 88));
console.log(binarySearch(searchArray, 1));

console.log("Testing for Linear Search");
console.log(linearSearch(searchArray, 1));
console.log(linearSearch(searchArray, 17));
console.log(linearSearch(searchArray, 67));
console.log(linearSearch(searchArray, 4));

