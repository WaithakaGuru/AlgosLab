import { AbsSinglyLinkedList, SLLNode } from "./BaseClasses";

/**
 * @extends AbsSinglyLinkedList extends methods of the abstractDSinglyLinkedList class
 * @implements only implements methods whose working is different from that of a normal SinglyLinkedList(SLL)
 */
class CircularSinglyLinkedList<T> extends AbsSinglyLinkedList<T>{
    constructor(){
        super() 
    }
  
    push(val: T) {
        const newNode = new SLLNode<T>(val);
        if(this.len===0 ){
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head
        }else{
            const currentTail = this.tail;
            currentTail!.next = newNode;
            this.tail  = currentTail!.next
            this.tail.next = this.head
        }
        this.len ++ 
    }
    
    pop(){
        if(this.setNull()){
            const preTail = this.get(this.len-2);
            let currentTail = this.get(-1);
            currentTail = null;
            this.tail = preTail;
            this.tail!.next = this.head;
            this.len --
        }else return
    }
}

const CSLL1 = new CircularSinglyLinkedList();
CSLL1.push(23);
CSLL1.push(32);
CSLL1.push(43);
CSLL1.push(56);
CSLL1.push(68);
CSLL1.traverse(3)
// console.log(CSLL1);