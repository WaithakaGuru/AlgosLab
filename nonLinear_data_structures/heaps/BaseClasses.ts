/**
 * @classdesc a description and declaration of all the properties of a heap Node;
 */
export abstract class HeapNode{
    val: number
    rightNode: HeapNode | null;
    leftNode: HeapNode| null;
    constructor(data: number) {
        this.val = data;
        this.rightNode = null;
        this.leftNode = null;
    }
}

/**
 * @abstract class that contains all the declarations of the methods and properties of a max or min heap and their JSDoc comments documentation
 */
export abstract class HeapMethods extends HeapNode{    
    heap: number[] =[]
    /**
     * Adds a value to the heap while maintaining the heap property
     * @param val the value to be added to the heap 
     * @returns void
     */
    add(val: number):void{}

    /**
     * Gets the top most value in the heap 
     * @returns the top most value in the heap (i.e. the minimum val for minHeaps or the max val for maxHeaps) or undefined if the heap is empty
     */
    peek(): number{
        return  this.heap[0];
    }

    /**
     * Removes the top most value from the heap and returns it
     * @returns the top most value in the heap or undefined if the heap is empty
     */
    pluck(): number | undefined{
        return 
    }

    /**
     * Compares and exanges a value with its parent if the value is less (for maxHeap) or larger(for minHeap) than the parent
     * to maintain the heap property
     * @param idx  the index of the heapNode to be siftedUp
     * @returns void
     */
    siftUp(idx: number): void{}

    /**
     * Compares and exanges a parentValue with its child if the value is less (for maxHeap) or larger(for minHeap) than the parent
     * to maintain the heap property
     * @param idx the index of the heapNode to be sifted Down
     * @returns void
     */
    siftDown(idx: number): void{}
    
    /**
     * Updates the value of a heap node while maintaining the heap property
     * @param idx the index of the heap value to be updated
     * @param val the new value of to be set 
     */
    update(idx:number, val:number): void{}

    /**
     * Takes in and array and converts it to a heap
     * @param arr an array of values to be converted to a heap 
     * @returns the new heap or undefined if the @param arr is empty
     */
    heapify(arr: number[]): number[] | void{ return}
    
    /**
     * Returns a number that is one less than the count of the nodes in the heap
     * @returns the zeroBased index length of nodes in the heap
     */
    len(): number {
        return this.heap.length === 0 ? 0 : this.heap.length -1;
    }
}