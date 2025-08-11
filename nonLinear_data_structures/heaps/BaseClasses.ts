import { HeapMethodsDeclarations } from "./heapDeclarations";

type HeapType = "MAX" | "MIN";

const Comparers = {
    MAX:{ option:(i: number, j: number) => i>j, 
        optima: (k: number, l: number, heap: number[])=> (heap[k] >= heap[l])? k : l},
    MIN: {option: (i: number, j: number) => i<j, 
        optima: (k: number, l: number, heap: number[]) => (heap[k] <= heap[l]) ? k : l
    }
}

export abstract class Heap extends HeapMethodsDeclarations {
    heap: number[] =[]
    private type : HeapType

    constructor(heapType : HeapType) {
        super()
        this.type = heapType
    }

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
        if(this.len() === 0)  return
        [this.heap[0], this.heap[this.len()]] = [this.heap[this.len()], this.heap[0]];
        const min = this.heap.pop();
        this.siftDown(0);
        return min;
    }
    
    update(idx: number, val: number) {
        const comp = Comparers[this.type].option;
        if(val === this.heap[idx]) return
        else if(this.len() === 0) this.heap.push(val);
        else if(idx === 0 && comp(val, this.heap[0])) this.heap[0] = val;
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

    protected siftUp(i: number): void {     
        let parent = Math.floor((i-1)/2), comp = Comparers[this.type].option;
        while(i > 0 && comp(this.heap[i], this.heap[parent])){
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]]
            i = parent;
            parent = Math.floor((i-1)/2)
        } 
    }
    
    protected siftDown(i: number): void {
        const opposite = this.type === "MAX"? "MIN" : "MAX", comp = Comparers[opposite].option;
        const optimalChild = Comparers[this.type].optima
        let left = 2 * i + 1, right = 2 * i + 2;
        
        while(true){
            if(left > this.len()) return;
            let less = (right > this.len()) ? left : optimalChild(left, right, this.heap)
            if(comp(this.heap[i], this.heap[less])){
                [this.heap[i], this.heap[less]] = [this.heap[less], this.heap[i]];
                i = less;
                left = 2 * i + 1;
                right = 2 * i + 2;
            }else break;
        }
    }
}