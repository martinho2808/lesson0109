class Stack { 
    constructor() {
        // Use an object with numeric keys to store values
        this.storage = {};
        this.storageSize = 0; 
    }

    push(value) { 
        this.storage[this.storageSize] = value
        this.storageSize += 1;
    }

    pop() {
        if (this.storageSize > 0) {
          this.storageSize -= 1;
        }
       let value = this.storage[this.storageSize]
       delete this.storage[this.storageSize]
       return value;
    }

    // This method should return the storage size
    size() {
        return this.storageSize;
    }
}  

obj = new Stack()

