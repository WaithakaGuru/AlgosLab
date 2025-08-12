/**
 * A sorting algorothm that works by assigning an elements as largest and comparing it with the
 *  rest of the elements and swapping elements if a new largest is found
 * @param list the list of elements to be sorted
 */
export default function selectionSort(list: number[]): number[] {
    for(let i=list.length-1; i>0; i--){
        let max = 0;
        for(let j = 1; j<=i; j++){
            if(list[j] > list[max]) max = j
        }
        [list[max], list[i]] = [list[i], list[max]]
    }
    return list
}