import { HeapMethods } from "./BaseClasses";

/**
 *A datastructure use to organize data in a tree structure with a property that a node's
  data is less than or equal to any of its child node's data
  * @classdesc implements all the heap methods but with the minHeap Property above
 */
class minHeap extends HeapMethods{
    add(val: number): void {
        this.heap.push(val)
        this.siftUp(this.heap[this.len()])
    }
    heapify(arr: number[]): number[] | void{
        for (const num of arr) {
            this.heap.push(num)
            this.siftUp(this.len())
        }
    }

    siftUp(i: number): void {
        const t = [1,2,3,4]
        if(this.len() === 0 || i === 0) return 
        let parent = Math.floor((i-1)/2);
        while(i !== 0 && this.heap[i] < this.heap[parent]){
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]]
            i = parent;
            parent = Math.floor((i-1)/2)
        } 
    }

    siftDown(i: number): void {
        const min = (i: number, j: number) => this.heap[i] <= this.heap[j] ? i : j;
        let left = (i *2) + 1, right = (i*2)+ 2, less = min(left, right)
        if(left > this.len() || right > this.len()) return;
        while(this.heap[i] > this.heap[less]){
            [this.heap[i], this.heap[less]] = [this.heap[less], this.heap[i]];
            i = less;
            left =  (i *2) + 1, right = (i*2)+ 2;
            less = min(left, right); 
        }
    }

    pluck(): number | undefined {
      [this.heap[0], this.heap[this.len()]] = [this.heap[this.len()], this.heap[0]];
      const min = this.heap.pop(), modified = this.heap;
      this.heap = [], this.heapify(modified);
      return min;
    }
}