import { Heap} from "./BaseClasses";

/**
 *A datastructure used to organize data in a tree structure with a property that a node's
  data is less than or equal to any of its child node's data
  * @classdesc implements all the heap methods while maintaining the minHeap Property above
 */
export default class MinHeap extends Heap{
   constructor(){
    super("MIN")
   }
}
