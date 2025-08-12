/**
 * Bubbles each element repeatedly by comapring it to the next element until the List is sorted 
 * @param list the list of items to be sorted
 * @implements the two pointer method
 * @returns the sorted list
 */
export default function bubbleSort(list: number[]): number[]{
    let swaps: number
    do{
        swaps = 0;
        for(let i=0; i<list.length; i++){
            let  j = i,  k = j+1;
            if(list[j] > list[k]) {
                [list[j], list[k]] = [list[k], list[j]];
                swaps ++
            }
        }
    }while(swaps > 0)
    return list
}
