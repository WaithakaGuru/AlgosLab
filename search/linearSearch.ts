/**
 * @O(n)
 * @param searchArray The search space where the target might be found
 * @param target The element to be found 
 * @returns undefined if the list is empty. Returns an object with the index of the found target (or -1 if target not found) 
 *      and the found statement 
 */
export default function linearSearch(searchArray: number[], target: number) {
    if(searchArray.length === 0) return
    for(let i = 0; i < searchArray.length; i++) {
        if(searchArray[i] === target) return {i, found: `Target(${target}) found at index ${i}`}
    }
    return {i: -1, found:`Target not found!!`}
}

