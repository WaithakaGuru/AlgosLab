import { Heap } from "./BaseClasses";

/**
 *A datastructure use to organize data in a tree structure with a property that a node's
  *data is greater than or equal to any of its child node's data
  * @BigO (n) to create the heap
  * @classdesc takes the structure of a binary tree 
  * @implements implements all the heap methods but with the minHeap Property above
 */
export default class MaxHeap extends Heap{
   constructor(){
    super("MAX")
   }
}