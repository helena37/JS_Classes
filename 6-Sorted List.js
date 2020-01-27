class List {
    _numbers = [];
    size;

    constructor() {
        this._numbers = [];
        this.size = 0;
    }

    add(element) {
        this._numbers.push(element);
        this._numbers.sort((a, b) => a - b);
        this.size++;
        return this._numbers;
    }

    remove(index) {
        if (index < 0 || index >= this._numbers.length) {
            throw new Error("Index out of bound");
        }
        this._numbers.splice(index, 1);
        this.size--;
        this._numbers.sort((a, b) => a - b);
        return this._numbers;
    }

    get(index) {
        if (index < 0 && index >= this._numbers.length) {
            throw new Error("Index out of bound");
        }
        return this._numbers[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
console.log(list);
