// Import all sorting algorithms and random array generator from the main algos directory
import bubbleSort from '../../bubbleSort';
import insertionSort from '../../insertionSort';
import selectionSort from '../../selectionSort';
import mergeSort from '../../mergeSort';
import quickSort from '../../quickSort';
import bucketSort from '../../bucketSort';
import heapSort from '../../heapSort';
import generateRandomArray from '../../../sort_visualizer/randomArray';

export const algorithms = {
  bubbleSort,
  insertionSort,
  selectionSort,
  mergeSort,
  quickSort,
  bucketSort,
  heapSort,
};

export { generateRandomArray };
