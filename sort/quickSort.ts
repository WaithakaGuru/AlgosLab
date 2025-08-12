/**
 * Sorting algorithm that works by diving list into two where all elements below pivot are less and above are larger that the pivot
 * @param list - the list of items to be sorted
 * @returns the sorted list
 * @implements A Recursive approach with a helper function 
 */
export default function quickSort(list: number[], start = 0, end = list.length-1) : number[]{
    if(start < end){
        let pivotIndex = getPivot(list, start, end);
        quickSort(list, start, pivotIndex-1);
        quickSort(list, pivotIndex+1, end);
    }
    return list;
}

function getPivot(list: number[], start: number, end: number): number{
    let pivot = list[end], i = start -1;
    for(let j=start; j<end; j++){
        if(list[j] < pivot) {
            i++;
            [list[i], list[j]] = [list[j], list[i]]
        }
    }
    [list[i+1], list[end]] = [list[end], list[i+1]]
    return i+1
}

/**
 * Sort the list recusively by dividing the list into two  but with no helper function
 * @param list - the list of items to be sorted
 * @returns the sorted list
 */
export function quick_sort(list: number[]): number[] {
    if(list.length < 1) return list
    const right: number[] = [], left: number[] = [];
    const pivot = list[list.length-1];
    for(let i=0; i<list.length-1; i++){
        if(list[i] <= pivot) left.push(list[i])
        else right.push(list[i])
    }
    return [...quick_sort(left), pivot, ...quick_sort(right)]
}