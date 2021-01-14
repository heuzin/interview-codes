class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    find(n) {
        return this.data[n];
    }
    push(n) {
        const item = n;
        this.data[this.length] = item;
        this.length = this.length + 1;
        return item;
    }
    pop() {
        const lastItem = this.length - 1;
        delete this.data[lastItem];
        this.length = this.length - 1;
        return lastItem
    }
    remove(n) { 
        for (let i = n; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1]
        this.length = this.length - 1;    
    }
}

const newArray = new Array;
newArray.push('hi');
newArray.push('friend');
newArray.push('lets');
newArray.push('play');
newArray.pop();
newArray.find(0);