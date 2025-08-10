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
abstract class HeapMethodsDeclarations{    
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
    peek(): number | undefined{return}

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
   protected siftUp(idx: number): void{}

    /**
     * Compares and exanges a parentValue with its child if the value is less (for maxHeap) or larger(for minHeap) than the parent
     * to maintain the heap property
     * @param idx the index of the heapNode to be sifted Down
     * @returns void
     */
   protected siftDown(idx: number): void{}
    
    /**
     * Updates the value of a heap node at a given index in the heap while maintaining the heap property
     * @param idx the index of the heap value to be updated
     * @param val the new value of to be set 
     */
    update(idx:number, val:number): void{}

    /**
     * Takes in and array and converts it to a heap
     * @param arr an array of values to be converted to a heap 
     * @returns the new heap or undefined if the arr is empty
     */
    heapify(arr: number[]): number[] | void{ return}
    
    /**
     * Returns a number that is one less than the count of the nodes in the heap
     * @returns the zeroBased index length of nodes in the heap
     */
    len(): number{return 0}
}

export abstract class HeapMethods extends HeapMethodsDeclarations{
    heap: number[] =[]

    add(val: number): void {
        this.heap.push(val)
        this.siftUp(this.len())
    }

    heapify(arr: number[]): number[] | void{
        this.heap = [...arr];
        for (let i =  Math.floor(this.len()/2); i>=0; i--) 
         this.siftDown(i);
    }

    
    pluck(): number | undefined {
        [this.heap[0], this.heap[this.len()]] = [this.heap[this.len()], this.heap[0]];
        const min = this.heap.pop();
        this.siftDown(0);
        return min;
    }
    
    update(idx: number, val: number) {
        if(val === this.heap[idx]) return
        else if(this.len() === 0) this.heap.push(val);
        else if(idx === 0 && val < this.heap[0]) this.heap[0] = val;
        else if(idx === 0) {
            this.heap[idx] = val;
            this.siftDown(idx)
        }
        else this.siftUp(idx)
    }

    len () : number {
        return this.heap.length === 0 ? 0 : this.heap.length -1;
    }

    peek(): number{
        return  this.heap[0];
    }

    protected siftDown(idx: number): void {}
    protected siftUp(idx: number): void {}
    
}