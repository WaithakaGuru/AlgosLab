const Comparers = {
    MAX:{ 
        option: (i: number, j: number) => i>j,
        optima: (k: number, l: number, heap: number[]) => (heap[k] >= heap[l])? k : l
    },
    MIN: {
        option: (i: number, j: number) => i<j,
        optima: (k: number, l: number, heap: number[]) => (heap[k] <= heap[l])? k : l
    }
}

type HeapType = "MAX" | "MIN";

class Heap{
    private type : HeapType
    heap: number[] = [];
    len = this.heap.length == 0 ? 0 : this.heap.length -1

    constructor(heapType : HeapType) {
        this.type = heapType
    }

    heapify(arr: number[]): number[] | void{
        this.heap = [...arr];
        for (let i =  Math.floor(this.len/2); i>=0; i--) 
            this.siftDown(i);
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
            if(left > this.len) return;
            let less = (right > this.len) ? left : optimalChild(left, right, this.heap)
            if(comp(this.heap[i], this.heap[less])){
                [this.heap[i], this.heap[less]] = [this.heap[less], this.heap[i]];
                i = less;
                left = 2 * i + 1;
                right = 2 * i + 2;
            }else break;
        }
    }
}