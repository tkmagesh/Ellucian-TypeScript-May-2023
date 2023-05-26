"use strict";
class ProductsCollection {
    constructor() {
        this.list = [];
    }
    add(item) {
        this.list.push(item);
    }
    getAll() {
        return [...this.list];
    }
    get(idx) {
        return this.list[idx];
    }
    get length() {
        return this.list.length;
    }
    sortById() {
        for (let i = 0; i < this.list.length - 1; i++)
            for (let j = i + 1; j < this.list.length; j++) {
                if (this.list[i].id > this.list[j].id) {
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
                }
            }
    }
    sortByAttr(attrName) {
        for (let i = 0; i < this.list.length - 1; i++)
            for (let j = i + 1; j < this.list.length; j++) {
                if (this.list[i][attrName] > this.list[j][attrName]) {
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
                }
            }
    }
}
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
    getAll() {
        return [...this.list];
    }
    get length() {
        return this.list.length;
    }
    sortById() {
        for (let i = 0; i < this.list.length - 1; i++)
            for (let j = i + 1; j < this.list.length; j++) {
                if (this.list[i].id > this.list[j].id) {
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
                }
            }
    }
    sortByAttr(attrName) {
        for (let i = 0; i < this.list.length - 1; i++)
            for (let j = i + 1; j < this.list.length; j++) {
                if (this.list[i][attrName] > this.list[j][attrName]) {
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
                }
            }
    }
}
/*
const myNoCol = new MyCollection<number>()
myNoCol.add(10)
myNoCol.add(20)

const myStrCol = new MyCollection<string>()
myStrCol.add("pen")
myStrCol.add("pencil")

const myCol = new MyCollection<number | string>()
myCol.add(100)
myCol.add("Pen")
*/
//const products = new ProductsCollection()
const products = new MyCollection();
products.add({ id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' });
products.add({ id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' });
products.add({ id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' });
products.add({ id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' });
products.add({ id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' });
products.add({ id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' });
console.log("initial list");
console.table(products.getAll());
console.log("Sort by id");
products.sortById();
console.table(products.getAll());
console.log("Sort by attribute [cost]");
products.sortByAttr('cost');
console.table(products.getAll());
