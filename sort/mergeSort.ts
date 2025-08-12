/**
 * Sorts a list by recursively dividing the list by 2 the sorting upwards; 
 * @implements the Divide and conquer approach 
 * @BigO (nlogn)
 * @param list - the list of items to be sorted 
 * @returns the sorted array 
 */
export default function mergeSort(list: number[]): number[] | void{
    if(list.length<=1) return list

    const len = list.length -1
    const middle = Math.floor(len/2);
    const leftArray: number[] = [], rightArray: number[] = [];
    let j =0
   
    for( let i = 0; i<=len; i++){
        if(i<=middle) leftArray[i] = list[i]
        else{
            rightArray[j] = list[i];
            j++
        }
    }   
    mergeSort(leftArray);
    mergeSort(rightArray);
    merge(leftArray, rightArray, list)
    return list
}

/**
 * A helper function to help sort the subarrays and merge them back into full arrays
 * @param leftArray The left array to be sorted and merged
 * @param rightArray The right array to be sorted and merged
 * @param fullArray The full array from which the left and right arrays were splited
 * @returns the full sorted and merged array 
 */
function merge(leftArray: number[], rightArray: number[], fullArray: number[]): number[] {
    let leftPointer = 0, rightPointer = 0;
    for(let i=0; i<fullArray.length; i++){
        if(leftPointer < leftArray.length && rightPointer < rightArray.length){
            if(leftArray[leftPointer] <= rightArray[rightPointer]) fullArray[i] = leftArray[leftPointer++];
            else if(rightArray[rightPointer] < leftArray[leftPointer]) fullArray[i] = rightArray[rightPointer++];
        }
        else fullArray[i] = rightPointer < rightArray.length ? rightArray[rightPointer++ ] : leftArray[leftPointer++]
    }
    return fullArray
}