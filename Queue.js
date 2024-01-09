class Queue {
    constructor() {
        this.list = {}
        this.first = 0
        this.last = 0
    }

    enqueue(item) { 
        this.list[this.last] = item
        this.last++
    }

    dequeue() {
        // get the size
        let size = this.last - this.first;
        // if its less than 0, theres nothing in the queue to return 
        if (size <= 0) {
            return undefined;
        }

        let item = this.list[this.first];
        delete this.list[this.first];
        this.first++;

        if (this.first === this.last) {
        this.first = 0;
        this.last = 0;
        }
        return item;
        }

    size() {
        return this.last - this.first
    }

    peek() {
        return this.list[this.first]
    }
} 

obj = new Queue()
