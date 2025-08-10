import { HeapMethods } from "./BaseClasses";

/**
 *A datastructure use to organize data in a tree structure with a property that a node's
  data is less than or equal to any of its child node's data
  * @classdesc implements all the heap methods but with the minHeap Property above
 */
export default class MinHeap extends HeapMethods{
    add(val: number): void {
        this.heap.push(val)
        this.siftUp(this.len())
    }

    heapify(arr: number[]): number[] | void{
        this.heap = [...arr];
        for (let i = Math.floor(this.len() / 2); i >= 0; i--) 
         this.siftDown(i)
    }

    siftUp(i: number): void {     
        let parent = Math.floor((i-1)/2);
        while(i > 0 && this.heap[i] < this.heap[parent]){
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]]
            i = parent;
            parent = Math.floor((i-1)/2)
        } 
    }

    siftDown(i: number): void {
        const min = (i: number, j: number) => this.heap[i] <= this.heap[j] ? i : j;
        let left = 2 * i + 1, right = 2 * i + 2, less = min(left, right)
        if(left > this.len() || right > this.len()) return;
        while(this.heap[i] > this.heap[less] && left < this.len() && right < this.len()){
            [this.heap[i], this.heap[less]] = [this.heap[less], this.heap[i]];
            i = less;
            left =  (i *2) + 1, right = (i*2)+ 2;
            less = min(left, right); 
        }
    }

    pluck(): number | undefined {
        [this.heap[0], this.heap[this.len()]] = [this.heap[this.len()], this.heap[0]];
        const min = this.heap.pop(), modified = this.heap;
        this.siftDown(0)
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
}
