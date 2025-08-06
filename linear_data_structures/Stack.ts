export default class Stack<T>{
    private stackItems: T[] = [];

    /**
     * adds a new item to the top of the stack and
     * @param item  the item to be added to the stack
     * @returns a returns the added item
     */
    add(item: T) {
        return this.stackItems.push(item);
    }

    /**
     * removes the top most item from the stack and returns it 
     * @returns returns the top most item in the stack
     */
    remove() {
        return this.stackItems.pop()
    }
    
    /**
     * @returns returns the top most item in the stack
     */
    peek(): T | undefined {
        return this.stackItems[this.stackItems.length-1];
    }
    
    /**
     * @returns returns the bottom  most item in the stack
     */
    peekLast(): T | undefined {
        return this.stackItems[0];
    }

    /**
     * returns the size of the stack
     * @returns retuns the number of items in the stack
     */
    len(){
        return this.stackItems.length
    }
}

const items = new Stack();

items.add(5);
// items.remove()
console.log(items.peek());
