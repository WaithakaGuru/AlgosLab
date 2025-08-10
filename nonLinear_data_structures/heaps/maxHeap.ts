import { HeapMethods } from "./BaseClasses";

/**
 *A datastructure use to organize data in a tree structure with a property that a node's
  *data is greater than or equal to any of its child node's data
  * @BigO (n) to create the heap
  * @classdesc takes the structure of a binary tree 
  * @implements implements all the heap methods but with the minHeap Property above
 */
export default class MaxHeap extends HeapMethods{
    protected siftUp(i: number): void {     
        let parent = Math.floor((i-1)/2);
        while(i > 0 && this.heap[i] > this.heap[parent]){
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]]
            i = parent;
            parent = Math.floor((i-1)/2)
        } 
    }

    protected siftDown(i: number): void {
        const max = (k: number, j: number) => this.heap[k] >= this.heap[j] ? k : j;

        let left = 2 * i + 1, right = 2 * i + 2;
        
        while(true){
            if(left > this.len()) return;
            let larger = (right > this.len()) ? left : max(left, right)
            if(this.heap[i] < this.heap[larger]){
                [this.heap[i], this.heap[larger]] = [this.heap[larger], this.heap[i]];
                i = larger;
                left = 2 * i + 1;
                right = 2 * i + 2;
            }else break;
        }
    }
}