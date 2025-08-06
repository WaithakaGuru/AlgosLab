import {AbsDoublyLinkedList, DLLNode } from "./BaseClasses";


/**
 * @extends AbsDoublyLinkedList extends methods of the abstractDoublyLinkedList class
 * @implements only implements methods whose working is different from that of a normal DoublyLinkedList(DLL)
 */
class CircularDoublyLinkedList<T> extends AbsDoublyLinkedList<T>{
    constructor(){
        super();
    }
  
    push(val: T): void{
        const newNode = new DLLNode(val);
        if(this.len === 0){
            this.head = newNode
            this.tail = newNode;
            this.head!.next = this.tail
            this.head.prev =this.tail
            this.tail!.next = this.head
            this.tail.prev =this.head
        }  
        else{
            newNode.prev = this.tail
            this.tail!.next = newNode;
            newNode.next = this.head;
            this.tail = newNode
        }
        this.len++
    }
   
    pop(): void{
        if(!this.setNull()){
            let currentTail = this.tail; 
            this.tail = currentTail!.prev;
            this.tail!.next = this.head;
            currentTail = null;
            this.len -- 
        }else return
    }

   shift() : void {
       let currentHead = this.head;
       this.head = currentHead!.next;
       this.head!.prev = this.tail;
       currentHead = null;
       this.len --;
    }
   
    unshift(val: T): void {
        if(this.len === 0) this.push(val);
        else{
            const currentHead = this.head;
            this.head = new DLLNode(val);
            currentHead!.prev = this.head;
            this.head.next = currentHead;
            this.head.prev = this.tail;
        }
        this.len ++
    }
}

const CDLL1 = new CircularDoublyLinkedList();
CDLL1.traverse();