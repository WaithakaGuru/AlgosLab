/**
 * Searches for an element in a Sorted list by reducing the list by half with each iteration 
 * @O(logn)
 * @param arr The sorted array where the search for the target is to happen
 * @param target The element to be found 
 * @returns undefined if the list is empty. Returns an object with the index of the found target (or -1 if target not found) 
 *      and the found statement 
 */
export default function binarySearch(arr: number[], target: number) {
    if(arr.length === 0) return 
    let left = 0, right= arr.length-1, iterations: number = 0
    while(right >= left){
        let midVal = (left + right)/2;
        let mid = Math.ceil(midVal);
        console.log(`\tleft-> ${left}:  right-> ${right}: midpoint-> ${mid}`);
        if(target === arr[mid]) return {index: mid, found: `\tTotal iterations Made: ${iterations+1}\n\tTarget found at index: ${mid}\n`}
        if(target < arr[mid]) right = mid - 1;
        else left = mid + 1;
        iterations++
    }
    return {index: -1, found: `\t Total iterations made: ${iterations}\n\tTarget not found!!\n`}
}

