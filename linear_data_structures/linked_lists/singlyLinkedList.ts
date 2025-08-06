import { AbsSinglyLinkedList, SLLNode } from "./BaseClasses";

/**
 * @extends AbsSinglyLinkedList extends methods of the abstractSLL class
 * @implements only implements methods whose working is different from that of the circularSLL
 */
class SinglyLinkedList<T> extends AbsSinglyLinkedList<T>{
    constructor(){
       super()
    }
   
    push(val: T) {
        const newNode = new SLLNode<T>(val);
        if(this.len===0 ){
            this.head = newNode;
            this.tail = newNode;
        }else{
            const currentTail = this.tail;
            currentTail!.next = newNode;
            this.tail  = currentTail!.next
        }
        this.len ++ 
    }
  
    pop(){
        if(!this.setNull()){
            const preTail = this.get(this.len-2);
            this.tail = preTail;
            this.tail!.next = null;
            this.len --
        }else return
    }  
}

const list = new SinglyLinkedList<number>();

list.push(3);
list.push(4)
list.push(5)
list.push(6)

// list.reverse();

// list.remove(0);
// list.remove(-1);
// list.unshift(2);
list.add(0, 2)
console.log(list.get(0));