export default class Queue<T>{
    private queueItems : T[] = [];
    
    /**
     * Adds a new item to the queue and returns the modified queue.
     * @param item The new item to be added to the queue.
     * @returns returns the Queue with the new item added. 
     */
    add(item: T) {
        return this.queueItems.push(item);
    }

    /**
     * Removes the first element in the queue
     * @returns The removed item in the queue
     */
    remove(): T | undefined {
        return this.queueItems.shift()
    }

    /**
     * Gets the first element in the queue and returns it.
     * @returns The first element in the queue 
     */
    peek(): T | undefined {
        return this.queueItems[0]
    }
    
    /**
     * Gets the last element in the queue and returns it.
     * @returns The last element in the queue 
     */
    peekLast(): T | undefined {
        return this.queueItems[this.queueItems.length - 1]
    }

    /**
     * Returns the count of the items in the queue.
     * @returns The length of the queue.
     */
    len() {
        return this.queueItems.length
    }
}

