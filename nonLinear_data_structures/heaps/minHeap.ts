import { HeapMethods } from "./BaseClasses";

/**
 *A datastructure use to organize data in a tree structure with a property that a node's
  data is less than or equal to any of its child node's data
  * @classdesc implements all the heap methods but with the minHeap Property above
 */
export default class MinHeap extends HeapMethods{
    protected siftUp(i: number): void {     
        let parent = Math.floor((i-1)/2);
        while(i > 0 && this.heap[i] < this.heap[parent]){
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]]
            i = parent;
            parent = Math.floor((i-1)/2)
        } 
    }
    
    protected siftDown(i: number): void {
        const min = (k: number, j: number) => this.heap[k] <= this.heap[j] ? k : j;
    
        let left = 2 * i + 1, right = 2 * i + 2;
        
        while(true){
            if(left > this.len()) return;
            let less = (right > this.len()) ? left : min(left, right)
            if(this.heap[i] > this.heap[less]){
                [this.heap[i], this.heap[less]] = [this.heap[less], this.heap[i]];
                i = less;
                left = 2 * i + 1;
                right = 2 * i + 2;
            }else break;
        }
    }
}
