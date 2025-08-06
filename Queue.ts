export default class Queue<T>{
    private queueItems : T[] = [];
    
    add(item: T) {
        return this.queueItems.push(item);
    }

    remove(): T | undefined {
        return this.queueItems.shift()
    }

    peek(): T | undefined {
        return this.queueItems[0]
    }
    peekLast(): T | undefined {
        return this.queueItems[this.queueItems.length - 1]
    }
    len() {
        return this.queueItems.length
    }
}

