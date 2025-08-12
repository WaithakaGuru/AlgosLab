import insertionSort from "./insertionSort";
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