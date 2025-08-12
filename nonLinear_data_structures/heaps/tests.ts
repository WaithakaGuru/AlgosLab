import MaxHeap from "./maxHeap";
import minHeap from "./minHeap";

const heap1 = new minHeap ();
heap1.heapify([4,3,2,1]);
console.table(heap1.heap);
heap1.pluck();
// heap1.pluck();
// heap1.pluck();
// console.log(heap1.peek());
// heap1.add(22);
// heap1.update(0, 1)
// heap1.update(0, 5);
// heap1.update(1, 9);
// console.log(heap1.heap);

const trial2 = [12, 7, 25, 3, 18, 9, 2, 15, 6, 20, 6, 45, 66, 17, 67];
const heap2 = new MaxHeap();
console.time("Creating a heap")
heap2.heapify(trial2);
// console.timeLog();
console.timeEnd("Creating a heap");
console.table(heap2.heap);

console.time("Adding a new item to the heap");
heap2.add(70);
console.timeEnd("Adding a new item to the heap");
console.table(heap2.heap);
// console.error();
// console.info();
// console.debug();

console.log(heap2.peek());
heap2.pluck()
const count = heap2.size
console.table(heap2.heap)
console.log(count);
// console.clear()
