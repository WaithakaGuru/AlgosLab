/**
 * Sorts in place by creating imaginary boundary between sorted and unsorted elements by 
 * picking an element from the unsorted and inserting it to its correct positon in the sorted and increment the boundary 
 * @param list the list of elements to be sorted 
 * @returns the sorted list 
 */
export default function insertionSort (list: number[]): number[]{
    for(let boundary = 1; boundary< list.length; boundary++){
        for(let j=boundary - 1; j>=0; j--){ 
            const current = list[boundary]
            if(list[current] < list[j]) [list[current], list[j]] = [list[j], list[current]]
        }
    }
    return list
}