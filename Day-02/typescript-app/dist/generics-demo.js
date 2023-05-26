"use strict";
class MyCollection {
    constructor() {
        this.list = [];
    }
    add(item) {
        this.list.push(item);
    }
    get(idx) {
        return this.list[idx];
    }
    get length() {
        return this.list.length;
    }
}
const myNoCol = new MyCollection();
myNoCol.add(10);
myNoCol.add(20);
const myStrCol = new MyCollection();
myStrCol.add("pen");
myStrCol.add("pencil");
const myCol = new MyCollection();
myCol.add(100);
myCol.add("Pen");
