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
    /*
    each(action: (item: T) => void ){
        for (let item of this.list) {
            action(item)
        }
    }
    */
    each(action) {
        for (let item of this.list) {
            action(item);
        }
    }
    /*
    filter(fn: (item: T) => boolean ) : MyArray<T> {
        const result = new MyArray<T>()
        for (let item of this.list){
            if (fn(item) === true){
                result.add(item)
            }
        }
        return result;
    }
    */
    filter(fn) {
        const result = new MyArray();
        for (let item of this.list) {
            if (fn(item) === true) {
                result.add(item);
            }
        }
        return result;
    }
    any(fn) {
        for (let item of this.list) {
            if (fn(item))
                return true;
        }
        return false;
    }
    all(fn) {
        for (let item of this.list) {
            if (!fn(item))
                return false;
        }
        return true;
    }
}
let myNumbersList = new MyArray();
myNumbersList.add(11);
myNumbersList.add(22);
myNumbersList.add(33);
myNumbersList.add(44);
// myNumbersList.eachPrint()
myNumbersList.each(function (item) {
    console.log(item * 2);
});
const evenNos = myNumbersList.filter(function (item) {
    return item % 2 === 0;
});
console.log(evenNos);
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
