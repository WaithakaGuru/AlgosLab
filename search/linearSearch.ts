/**
 * @O(n)
 * @param searchArray The search space where the target might be found
 * @param target The element to be found 
 * @returns returns an object with index(i) of the found element and the found statement or (i:-1) if target was not found 
 *  or undefined is the searchArray is empty
 */
function linearSearch(searchArray: number[], target: number) {
    if(searchArray.length === 0) return
    for(let i = 0; i < searchArray.length; i++) {
        if(searchArray[i] === target) return {i, found: `Target(${target}) found at index ${i}`}
    }
    return {i: -1, found:`Target not found!!`}
}

