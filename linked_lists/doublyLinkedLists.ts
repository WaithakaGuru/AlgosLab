import {AbsDoublyLinkedList, DLLNode } from "./BaseClasses";


/**
 * @extends AbsDoublyLinkedList extends methods of the abstractDoublyLinkedList class
 * @implements only implements methods whose working is different from that of a circularDLL
 */
class DoublyLinkedList<T> extends AbsDoublyLinkedList<T>{
    constructor(){
        super();
    }
  
    push(val: T): void{
        const newNode = new DLLNode(val);
        if(this.len === 0){
            this.head = newNode
            this.tail = newNode;
        }  
        else{
            newNode.prev = this.tail
            this.tail!.next = newNode;
            this.tail = newNode
        }
        this.len++
    }
   
    pop(): void{
       if(this.len == 0) return;
       if(this.len == 1) {
           this.head = null;
           this.tail = null;
        }else{
            const currentTail = this.tail; 
            this.tail = currentTail!.prev;
            this.tail!.next = null;
        }
        this.len -- 
    }

   shift() : void {
       const currentHead = this.head;
       this.head = currentHead!.next;
       this.head!.prev = null;
       this.len --;
    }
   
    unshift(val: T): void {
        if(this.len === 0) this.push(val);
        else{
            const currentHead = this.head;
            this.head = new DLLNode(val);
            currentHead!.prev = this.head;
            this.head.next = currentHead;
        }
        this.len ++
    }
}

const DLL = new DoublyLinkedList<number>();
DLL.push(6);
DLL.push(7);
DLL.push(8)
// DLL.pop();
// DLL.shift();
// DLL.unshift(6)
// DLL.push(8);
// DLL.add(2, 45);
// DLL.remove(2);
DLL.set(0, 50);
// DLL.reverse();
console.log(DLL.get(0));