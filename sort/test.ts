import heapSort from "./heapSort";
import insertionSort from "./insertionSort";
import mergeSort from "./mergeSort";
import selectionSort from "./selectionSort";

const test = [1,2,3,4]
const test1 = [89, 57, 54, 45, 34, 33, 23, 22, 12, 3, 0]
const test2 = [1,2,3,4,5,6,7,8,9,11,10,13,12]
const test3 = [23,45,12,3,67,54,89,0,34,22,33]

console.log("\t--SELECTION SORT--\n");
console.time("Selection sort: sorted List");
console.table(selectionSort(test));
console.timeEnd("Selection sort: sorted List");

console.time("Selection sort: ReverseSorted List");
console.table(selectionSort(test1));
console.timeEnd("Selection sort: ReverseSorted List");

console.time("Selection sort: Almost sorted List");
console.table(selectionSort(test2));
console.timeEnd("Selection sort: Almost sorted List");

console.time("Selection sort: Normal List");
console.table(selectionSort(test3));
console.timeEnd("Selection sort: Normal List");
console.log();

console.log("\t--INSERTION SORT--\n");
console.time("Insertion sort: sorted List");
console.table(insertionSort(test));
console.timeEnd("Insertion sort: sorted List");

console.time("Insertion sort: ReverseSorted List");
console.table(insertionSort(test1));
console.timeEnd("Insertion sort: ReverseSorted List");

console.time("Insertion sort: Almost sorted List");
console.table(insertionSort(test2));
console.timeEnd("Insertion sort: Almost sorted List");

console.time("Insertion sort: Normal List");
console.table(insertionSort(test3));
console.timeEnd("Insertion sort: Normal List");
console.log();

console.log("\t--HEAP SORT--\n");
console.time("Heap sort: sorted List");
console.table(heapSort(test));
console.timeEnd("Heap sort: sorted List");

console.time("Heap sort: ReverseSorted List");
console.table(heapSort(test1));
console.timeEnd("Heap sort: ReverseSorted List");

console.time("Heap sort: Almost sorted List");
console.table(heapSort(test2));
console.timeEnd("Heap sort: Almost sorted List");

console.time("Heap sort: Normal List");
console.table(heapSort(test3));
console.timeEnd("Heap sort: Normal List");
console.log();

console.log("\t--MERGE SORT--\n");
console.time("Merge sort: sorted List");
console.table(mergeSort(test));
console.timeEnd("Merge sort: sorted List");

console.time("Merge sort: ReverseSorted List");
console.table(mergeSort(test1));
console.timeEnd("Merge sort: ReverseSorted List");

console.time("Merge sort: Almost sorted List");
console.table(mergeSort(test2));
console.timeEnd("Merge sort: Almost sorted List");

console.time("Merge sort: Normal List");
console.table(mergeSort(test3));
console.timeEnd("Merge sort: Normal List");