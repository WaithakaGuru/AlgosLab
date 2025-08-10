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
        for (let i =  Math.floor(this.len()/2); i>=0; i--) 
         this.siftDown(i);
    }

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
}
const heap2 = new MinHeap();
heap2.heapify([4,3,2,1]);
console.log(heap2.heap);
// console.log(heap2.peek());
heap2.pluck()
console.log(heap2.heap)
