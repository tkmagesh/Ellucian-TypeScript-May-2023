"use strict";
// let arr : number[] = []
/*
let arr : Array<number> = []
arr.push(10)
arr.push("Hello")
arr.push(true)
arr.push({})
*/
class MyArray {
    constructor() {
        this.list = [];
    }
    add(data) {
        this.list.push(data);
    }
    getByIndex(idx) {
        return this.list[idx];
    }
    eachPrint() {
        for (let item of this.list) {
            console.log(item);
        }
    }
    each(action) {
        for (let item of this.list) {
            action(item);
        }
    }
}
let myNumbersList = new MyArray();
myNumbersList.add(10);
myNumbersList.add(20);
myNumbersList.add(30);
myNumbersList.add(40);
// myNumbersList.eachPrint()
myNumbersList.each(function (item) {
    console.log(item * 2);
});
let myStringList = new MyArray();
myStringList.add('pen');
myStringList.add('pencil');
myStringList.each(function (item) {
    console.log(item.toUpperCase());
});
/*
let myNumbersList = new MyArray<number>(10,20,30)
let myStringList = new MyArray<string>("Pen", "Pencil", "Marker")
let myDateList = new MyArray<Date>()
*/ 
