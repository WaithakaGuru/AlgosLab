import binarySearch from "./binarySearch";
import interpolationSearch from "./interpolationSearch";
import linearSearch from "./linearSearch";

const arr = [1,2,3,4,8,12,14,16,18,23,26,35,67,89,90,112, 140, 141, 150, 156, 157, 180,190, 240, 350, 450, 600, 700, 800,900, 1000];

console.log("\t Tests for linear search");
console.time("Linear search for last element in the list");
console.log(linearSearch(arr, 1000));
console.timeEnd("Linear search for last element in the list");
console.time("Linear search for first element in the list");
console.log(linearSearch(arr, 1));
console.timeEnd("Linear search for first element in the list");
console.time("Linear search for an element within the list");
console.log(linearSearch(arr, 112));
console.timeEnd("Linear search for an element within the list");
console.time("Linear search for an element that's not in the list");
console.log(linearSearch(arr, 299));

console.timeEnd("Binary search for an element that's not in the list");
console.log("\t Tests for binary search");
console.time("Binary search for last element in the list");
console.log(binarySearch(arr, 1000));
console.timeEnd("Binary search for last element in the list");
console.time("Binary search for first element in the list");
console.log(binarySearch(arr, 1));
console.timeEnd("Binary search for first element in the list");
console.time("Binary search for an element within the list");
console.log(binarySearch(arr, 112));
console.timeEnd("Binary search for an element within the list");
console.time("Binary search for an element that's not in the list");
console.log(binarySearch(arr, 299));
console.timeEnd("Binary search for an element that's not in the list");

console.log("\t Tests for interpolation search");
console.time("Interpolation search for last element in the list");
console.log(interpolationSearch(arr, 1000));
console.timeEnd("Interpolation search for last element in the list");
console.time("Interpolation search for first element in the list");
console.log(interpolationSearch(arr, 1));
console.timeEnd("Interpolation search for first element in the list");
console.time("Interpolation search for an element within the list");
console.log(interpolationSearch(arr, 112));
console.timeEnd("Interpolation search for an element within the list");
console.time("Interpolation search for an element that's not in the list");
console.log(interpolationSearch(arr, 299));
console.timeEnd("Interpolation search for an element that's not in the list");

