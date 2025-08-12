import MinHeap from "../nonLinear_data_structures/heaps/minHeap";

/**
 * Sorts a list using the heap structure; use a maxHeap for sorting in Descending order
 * @BigO (nlogn)
 * @param list the list to be sorted 
 * @retuns the sorted list
 */
export default function heapSort(list: number[]): number[] {
    const heap = new MinHeap()
    heap.heapify(list)
    const result: number[] = [];
    for(const i of list) result.push(heap.pluck()!)
    result[result.length-1] = heap.heap[heap.size]
    return result 
}

console.log(heapSort([23,45,12,3,67,54,89,0,34,22,33]));
