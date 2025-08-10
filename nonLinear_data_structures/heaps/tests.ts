import minHeap from "./minHeap";

const trial2 = [12, 7, 25, 3, 18, 9, 2, 15, 6, 20];

const heap1 = new minHeap ();
heap1.heapify(trial2);
// console.log(heap1.heap);
// heap1.pluck();
// heap1.pluck();
// heap1.pluck();
// console.log(heap1.peek());
heap1.add(22);
// heap1.update(0, 1)
// heap1.update(0, 5);
heap1.update(1, 9);
// console.log(heap1.heap);

const heap2 = new minHeap();
heap2.heapify([4,3,2,1]);
console.log(heap2.heap);
// console.log(heap2.peek());
heap2.pluck()
console.log(heap2.heap)

