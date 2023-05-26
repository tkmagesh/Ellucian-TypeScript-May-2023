// let arr : number[] = []
/* 
let arr : Array<number> = []
arr.push(10)
arr.push("Hello")
arr.push(true)
arr.push({})
*/

type Action<T> = (item: T) => void;

class MyArray<T>{
    private list : Array<T> = []
    constructor(){

    }
    add(data : T){
        this.list.push(data)
    }

    getByIndex(idx : number) : T {
        return this.list[idx]
    }

    eachPrint(){
        for (let item of this.list){
            console.log(item)
        }
    }

    each(action : Action<T>){
        for (let item of this.list) {
            action(item)
        }
    }

    filter(?) : ? {

    }
}

let myNumbersList = new MyArray<number>()
myNumbersList.add(10)
myNumbersList.add(20)
myNumbersList.add(30)
myNumbersList.add(40)
// myNumbersList.eachPrint()
myNumbersList.each(function(item){
    console.log(item * 2)
})

let myStringList = new MyArray<string>()
myStringList.add('pen')
myStringList.add('pencil')
myStringList.each(function(item){
    console.log(item.toUpperCase())
})
/* 
let myNumbersList = new MyArray<number>(10,20,30)
let myStringList = new MyArray<string>("Pen", "Pencil", "Marker")
let myDateList = new MyArray<Date>() 
*/