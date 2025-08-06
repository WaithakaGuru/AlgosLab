type TraverseSpecifity =|{headOnly: true}| {tailOnly: true}| { n : number};
/**
 * @abstract abstraction of LinkedLists' methods
 * @class class that contains the declarations of all the LinkedLists' methods and their jsDocs Explanations 
*/
abstract class LinkedListMethods<T>{
    /**
     * Gets a node at a given index in the list.
     *   (-1 )represents the last index. (0)  represents the first index.
     * @param index : index of the node to be found 
     * @returns returns the found node or throws an error if index is out of range 
    */
    get(index: number){}
   
   /**
    * Sets the value of a node at the given index to the newValue
    * @param idx: index of the node to be updated -1 represents index of the last node 
    * @param newValue : the value to be set 
     * @returns void
   */
    set(idx: number, newVal: T): void {}

    /**
     * Removes the last node in the Linked list 
     * @returns void
    */
    pop(): void{}
   
    /**
    * Adds a new ListNode at the end of the linkedList
    * @param val : value of the newNode 
    * @returns : void 
    */
    push(val: T): void {}
  
    /**
     * Removes node at the beginning of the linked list;
     * @returns void
     */
    shift(): void{}
 
    /**
     * Adds a new node at the beginning of the Linked list 
         * @param val: value of the new node to be added 
         * @returns void
     */
    unshift(val: T): void {}

    /**
     * Adds a new node to the linked list at a given index
     *      -1  represents the last index 
     * @param idx: the index to index position to insert a new node 
     * @param val: the value of the new node
     * @returns void
    */
    add(idx: number, val: T) : void{}

    /**
     * Removes a list node at a given index in the linkedlist 
     *      -1 represents the last index
     * @param idx index position of the node to be removed
     * @returns void
    */
    remove(idx: number): void {}

    /**
     * reverses the order of a Linked list
     * @returns void 
    */
    reverse () : void{}
    
    /**
     * Returns the size of the Linked list i.e. the number of nodes in the List
     *  This is a number one higher than the highest Zero-Based-index-length of the number of nodes
     * @returns number
     */
    size(): number {
        return 0
    }

    /**
     * Outputs the value of each Node in the LinkedList outlining the Head and Tail Nodes
     * @param specificty specifies what to be output: if set to
        n: number If specified, the function outputs the first (n) nodeValues in the List
        headOnly If specified, the function outputs the value of the headNode only
        tailOnly  If specified, the function outputs the value of the TailNode only
     * @default default value is undefined - outputs the whole LinkList Nodevalues
     * @return void
     */
    traverse (specificty: TraverseSpecifity) : void {}
}

export class BaseNode<T> {
    Data : T | null;
    constructor(data: T) {
        this.Data = data
    }
}


export class SLLNode<T> extends BaseNode<T>{
    next: SLLNode<T> | null = null;
    constructor (data: T) { 
       super(data)
    }
}

export class DLLNode<T> extends BaseNode<T> {
    next: DLLNode<T> | null;
    prev: DLLNode<T> | null;
    constructor(data: T) {
        super(data);
        this.prev = null
        this.next = null;
    }
}

/**
 * @abstract an abstraction of the definitions of all the SinglyLinkedList(SLL) methods 
 *  @class  implements all the methods whose implementation is same even in circular-SLL
*/
export abstract class AbsSinglyLinkedList<T> implements LinkedListMethods<T> {
    protected head: SLLNode<T> | null;
    protected tail: SLLNode<T> | null
    protected len: number
    constructor(){
        this.head = null;
        this.tail = null
        this.len = 0
    }

    protected setNull() : boolean {
        if(this.len ===0) return false
        if(this.len === 1) {
            this.head = null
            this.tail = null
            this.len --
            return true
        }
        return false
    }

    get(index: number){
        const idx =Math.ceil(index)
        if(idx > this.len - 1 || idx < -1) throw new Error("Index out of range!!")
        if(idx === -1) return this.tail
        if(idx === 0) return this.head
        let currentNode = this.head;
        let i = 0;
        while(i<idx){
            currentNode = currentNode!.next
            i++
        }
        return currentNode;
    }
   
    set(idx: number, newVal: T): void {
        const Node = this.get(idx);
        Node!.Data = newVal;
    }

    reverse () : void{
        if(this.len === 0 || this.len === 1) return
        const nodeValues = [];
        let firstNode = this.head;
        while(firstNode?.next !== null){
            nodeValues.push(firstNode?.Data);
            firstNode! = firstNode!.next;
        }
        nodeValues.push(firstNode.Data);
        this.head = null;
        this.tail = null;
        this.len = 0
        for(let i = nodeValues.length - 1; i >= 0; i--){
            this.push(nodeValues[i]!);
        }
    }

    shift(): void{
        if(this.setNull()) this.len --;
        else{
            let currentHead = this.head
            this.head = currentHead!.next;
            currentHead = null;
        }
        this.len --
    }

    unshift(val: T) {
        if(this.len === 0) {
            this.push(val);
            return
        }
        const currentHead = this.head;
        this.head = new SLLNode(val);
        this.head.next = currentHead
        this.len++
    }

    add(idx: number, val: T) : void{
        if(this.len === 0 || idx == this.len-1 || idx === -1 ) this.push(val);       
        else if (idx === 0) this.unshift(val)
        else{
            const nodeBefore = this.get(idx-1);
            const nodeAfter = this.get(idx);
            const newNode = new SLLNode(val);
            nodeBefore!.next = newNode;
            newNode.next = nodeAfter
            this.len ++
        }
    }

    remove(idx: number): void {
        if(idx === 0 || this.len === 1)this.shift();
        else if(idx === this.len - 1 || idx == -1) this.pop();
        else{
            const nodeBefore = this.get(idx - 1);
            let nodeToRemove = this.get(idx);
            nodeBefore!.next = nodeToRemove!.next;
            nodeToRemove = null;
            this.len--
        }
    }
    size(): number {
        return this.len
    }

    traverse(specificity?: TraverseSpecifity): void {
        if (this.len === 0) {
            console.log("List is Empty!!");
            return;
        }

        const values: any[] = [];
        let currentNode = this.head?.next;

        if (!specificity || ("n" in specificity && specificity.n >= this.len)) {
            for (let i = 1; i < this.len - 1; i++) {
            values.push(currentNode?.Data);
            currentNode = currentNode?.next;
            }
            console.log(
            `HeadNode[${this.head?.Data}] ->${values.map(val => ` ${val} ->`).join('')} TailNode[${this.tail?.Data}]`
            );
        } 
        else if ("n" in specificity) {
            const N = Math.min(specificity.n, this.len - 1);
            for (let i = 1; i < N; i++) {
            values.push(currentNode?.Data);
            currentNode = currentNode?.next;
            }
            console.log(
            `HeadNode[${this.head?.Data}] ->${values.map(val => ` ${val} ->`).join('')}...`
            );
        } 
        else if ("headOnly" in specificity) console.log(`HeadNode[${this.head?.Data}]`);        
        else if ("tailOnly" in specificity)console.log(`TailNode[${this.tail?.Data}]`);
    }

    pop(): void{}
    push(val: T): void {}
}

/**
 * @abstract an abstraction of the definitions of all the DoublyLinkedList(DLL) methods 
 *  @class  implements all the methods whose implementation is same even in circularDLL
*/
export abstract class AbsDoublyLinkedList<T> implements LinkedListMethods<T>{
    protected head: DLLNode<T> | null
    protected tail: DLLNode<T> | null
    protected len: number
    constructor() {
        this.len = 0
        this.head = null;
        this.tail = null;
    }

    protected setNull() : boolean {
        if(this.len ===0) return false
        if(this.len === 1) {
            this.head = null
            this.tail = null
            this.len --
            return true
        }
        return false
    }


    get(index: number): DLLNode<T> | null{
       const idx =Math.ceil(index)
       if(idx > this.len - 1 || idx < -1) throw new Error("Index out of range!!")
        if(idx === -1) return this.tail
       if(idx === 0) return this.head
       let currentNode = this.head;
       let i = 0;
       while(i<idx){
           (currentNode) = currentNode!.next
           i++
        }
        return currentNode;
    }
    
    add(idx: number, val: T): void {
        if(idx === 0) this.unshift(val);
        else if ((idx === this.len-1 && this.len > 2) || idx === -1 ) this.push(val);
        else{
            const nodeBefore = this.get(idx -1);
            const nodeAfter = this.get(idx);
            const newNode = new DLLNode(val);
            nodeBefore!.next = newNode;
            nodeAfter!.prev = newNode;
            this.len ++
        }
    }
    
    remove(idx: number): void {
        if(idx === 0) this.shift();
        else if(idx === this.len-1 || idx === -1) this.pop();
        else{
            let nodeToRemove = this.get(idx);
            const nodeBefore = this.get(idx -1);
            const nodeAfter = this.get(idx + 1);
            nodeToRemove = null;
            nodeBefore!.next = nodeAfter;
            nodeAfter!.prev = nodeBefore;
            this.len -- 
        }
    }
    
    set(idx: number, newVal: T): void {
        const Node = this.get(idx);
        Node!.Data = newVal;
    }

    reverse(): void {
        if(this.len === 0) return;
        if(this.len === 1) return;
        [this.head!, this.tail!] = [this.tail!, this.head!];
    }

     traverse(specificity?: TraverseSpecifity): void {
        if (this.len === 0) {
            console.log("List is Empty!!");
            return;
        }

        const values: any[] = [];
        let currentNode = this.head?.next;

        if (!specificity) {
            for (let i = 1; i < this.len - 1; i++) {
            values.push(currentNode?.Data);
            currentNode = currentNode?.next;
            }
            console.log(
            `HeadNode[${this.head?.Data}] ->${values.map(val => ` ${val} ->`).join('')} TailNode[${this.tail?.Data}]`
            );
        } 
        else if (typeof specificity === "object" && specificity !== null && "n" in specificity) {
            const N = Math.min(specificity.n, this.len - 1);
            for (let i = 1; i < N; i++) {
            values.push(currentNode?.Data);
            currentNode = currentNode?.next;
            }
            console.log(
            `HeadNode[${this.head?.Data}] ->${values.map(val => ` ${val} ->`).join('')}...`
            );
        } 
        else if ("headOnly" in specificity)console.log(`HeadNode[${this.head?.Data}]`);
        else if ("tailOnly" in specificity) console.log(`TailNode[${this.tail?.Data}]`);
    }

    size(): number {
        return this.len
    }

    pop(): void{}
    push(val: T): void {}
    shift(): void{}
    unshift(val: T): void {}
}