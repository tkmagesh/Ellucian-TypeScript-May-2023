type MyProduct = {
    id : number,
    name : string,
    cost : number,
    units : number,
    category : string
}

class ProductsCollection {
    private list : MyProduct[] = []

    add(item: MyProduct) {
        this.list.push(item)
    }

    getAll() : MyProduct[] {
        return [...this.list];
    }

    get(idx: number) : MyProduct {
        return this.list[idx]
    }

    get length(): number {
        return this.list.length
    }

    sortById(){
        for (let i = 0; i < this.list.length - 1;  i++)
            for (let j = 0; j < this.list.length; j++){
                if (this.list[i].id > this.list[j].id){
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]]
                }
            }
    }
}

class MyCollection<T>{
    private list : T[] = []

    add(item : T) : void {
        this.list.push(item)
    }

    get(idx : number): T {
        return this.list[idx]
    }

    getAll(): T[] {
        return [...this.list];
    }

    get length() : number{
        return this.list.length
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

// const products = new ProductsCollection()
const products = new MyCollection<MyProduct>()

products.add({ id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' });
products.add({ id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' });
products.add({ id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' });
products.add({ id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' });
products.add({ id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' });
products.add({ id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' });

console.table(products.getAll())



