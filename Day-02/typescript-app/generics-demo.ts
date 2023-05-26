class MyCollection<T>{
    private list : T[] = []

    add(item : T){
        this.list.push(item)
    }

    get(idx : number) {
        return this.list[idx]
    }

    get length() : number{
        return this.list.length
    }
}

const myNoCol = new MyCollection<number>()
myNoCol.add(10)
myNoCol.add(20)

const myStrCol = new MyCollection<string>()
myStrCol.add("pen")
myStrCol.add("pencil")

const myCol = new MyCollection<number | string>()
myCol.add(100)
myCol.add("Pen")


