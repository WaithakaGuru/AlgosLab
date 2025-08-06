/**
 * An improvement of the binary search which is more faster as it find the target
 *  by estimating the search area via a mathematical function
 * @O(logn/2)
 * @param searchArray The Sorted List where the search is to happen
 * @param target the element to be found 
 * @returns undefined if searchArray is empty, -1 if the target is not found or the index of target in the searchArray
 */
function interpolationSearch(searchArray: number[], target: number ): number | undefined {
    if(searchArray.length === 0) return 
    let low = 0, high: number = searchArray.length - 1, probe = 0;
    const SearchedIndices = new Set<number>()
    while(!SearchedIndices.has(probe)){
        SearchedIndices.add(probe)
        probe = Math.round((low + (high-low) * ((target - searchArray[low]) / (searchArray[high] - searchArray[low]))));
        if(searchArray[probe] === target)return probe;
        if (searchArray[probe] > target) high = probe-1
        else if(searchArray[probe] < target) low = probe + 1
    }
    return -1;
}

const arr = [1,2,3,4,8,12,14,16,18,23,26,35,67,89,90,112];
console.log(interpolationSearch(arr, 67));