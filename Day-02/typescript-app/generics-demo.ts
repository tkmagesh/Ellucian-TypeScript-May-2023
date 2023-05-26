type MyProduct = {
    id : number,
    name : string,
    cost : number,
    units : number,
    category : string
}

// type MyProductKeys = 'id' | 'name' | 'cost' | 'units' | 'category'
type MyProductKeys = keyof MyProduct

//Accessing attribute value types
type MyProductCostType = MyProduct['cost']
// type MyProductAttrTypes = MyProduct['id' | 'name' | 'cost' | 'units' | 'category']
type MyProductAttrTypes = MyProduct[keyof MyProduct]


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
            for (let j = i+1; j < this.list.length; j++){
                if (this.list[i].id > this.list[j].id){
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]]
                }
            }
    }

    sortByAttr(attrName: 'id' | 'name' | 'cost' | 'units' | 'category'){
        for (let i = 0; i < this.list.length - 1; i++)
            for (let j = i+1; j < this.list.length; j++) {
                if (this.list[i][attrName] > this.list[j][attrName]) {
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]]
                }
            }
    }

    sortByComparer(comparerFn : any){
        for (let i = 0; i < this.list.length - 1; i++)
            for (let j = i + 1; j < this.list.length; j++) {
                if (comparerFn(this.list[i], this.list[j]) > 0 ) {
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]]
                }
            }
    }

    sort(by? : any){
        let comparerFn ;
        if (!by){
            return this.sortById()
        }

        if (typeof by === 'function'){
            comparerFn = by
        }
        if (typeof by === 'string'){
            comparerFn = function (o1: any, o2: any) {
                if (o1[by] > o2[by]) return 1
                if (o1[by] < o2[by]) return -1
                return 0
            }
        }
        for (let i = 0; i < this.list.length - 1; i++)
            for (let j = i + 1; j < this.list.length; j++) {
                if (comparerFn(this.list[i], this.list[j]) > 0) {
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]]
                }
            }
    }

    /* filterCostlyProducts() : ProductsCollection {
        const result = new ProductsCollection()
        for (let product of this.list){
            if (product.cost > 50){
                result.add(product)
            }
        }
        return result
    }

    filterStationaryProducts(): ProductsCollection {
        const result = new ProductsCollection()
        for (let product of this.list) {
            if (product.category === 'stationary') {
                result.add(product)
            }
        }
        return result
    }
 */
    filter(predicate : any) : ProductsCollection {
        const result = new ProductsCollection()
        for (let product of this.list) {
            if (predicate(product)) {
                result.add(product)
            }
        }
        return result
    }

}

type IdType = { id : number };
type ComparerFn<T> = (x : T, y : T) => number;
type Predicate<T> = (o : T) => boolean;
type Negate = <T>(p: Predicate<T>) => Predicate<T>

/* 
function negate<T>(p : Predicate<T>) : Predicate<T> {
    return function(item : T) : boolean {
        return !p(item)
    }
} 
*/

const negate : Negate = <T>(p : Predicate<T>) => (item : T) => !p(item)

class MyCollection<T extends IdType>{
    private list : T[] = []

    add(item: T) : void {
        this.list.push(item)
    }

    get(idx: number): T {
        return this.list[idx]
    }

    getAll(): T[] {
        return [...this.list];
    }

    get length() : number{
        return this.list.length
    }

    sortById() {
        for (let i = 0; i < this.list.length - 1; i++)
            for (let j = i+1; j < this.list.length; j++) {
                if (this.list[i].id > this.list[j].id) {
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]]
                }
            }
    }

    sortByAttr(attrName: keyof T) {
        for (let i = 0; i < this.list.length - 1; i++)
            for (let j = i + 1; j < this.list.length; j++) {
                if (this.list[i][attrName] > this.list[j][attrName]) {
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]]
                }
            }
    }

    sortByComparer(comparerFn: ComparerFn<T>) {
        for (let i = 0; i < this.list.length - 1; i++)
            for (let j = i + 1; j < this.list.length; j++) {
                if (comparerFn(this.list[i], this.list[j]) > 0) {
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]]
                }
            }
    }

    sort(by?: keyof T | ComparerFn<T> ) {
        if (!by){
            return this.sortById()
        }
        let comparerFn : ComparerFn<T> = by as ComparerFn<T>
        if (typeof by === 'string') {
            comparerFn = function (o1: any, o2: any) {
                if (o1[by] > o2[by]) return 1
                if (o1[by] < o2[by]) return -1
                return 0
            }
        }
        for (let i = 0; i < this.list.length - 1; i++)
            for (let j = i + 1; j < this.list.length; j++) {
                if (comparerFn(this.list[i], this.list[j]) > 0) {
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]]
                }
            }
    }

    filter(predicate: Predicate<T> ): MyCollection<T> {
        const result = new MyCollection<T>()
        for (let item of this.list) {
            if (predicate(item)) {
                result.add(item)
            }
        }
        return result
    }

    first(predicate : Predicate<T>) : T | undefined {
        for (let item of this.list){
            if (predicate(item)){
                return item;
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

// const products = new ProductsCollection()
const products = new MyCollection<MyProduct>()

products.add({ id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' });
products.add({ id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' });
products.add({ id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' });
products.add({ id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' });
products.add({ id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' });
products.add({ id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' });

console.log("initial list")
console.table(products.getAll())

console.log("Sort by id")
// products.sortById()
// take advantage of the optional parameter in sort() method
products.sort()
console.table(products.getAll())

console.log("Sort by attribute [cost]")
// products.sortByAttr('cost')
products.sort('cost')
console.table(products.getAll());

console.log("Sort by comparer [units]")
function compareProductByUnits(p1 : any, p2 : any){
    if (p1.units > p2.units) return 1;
    if (p1.units < p2.units) return -1;
    return 0;
}
// products.sortByComparer(compareProductByUnits)
products.sort(compareProductByUnits)
console.table(products.getAll())

console.log("Sort by comparer [by value = cost * units]")
function compareProductByValue(p1: MyProduct, p2: MyProduct) : number {
    const p1Value = p1.cost * p1.units,
        p2Value = p2.cost * p2.units;
    if (p1Value > p2Value) return 1;
    if (p1Value < p2Value) return -1;
    return 0;
}
// products.sortByComparer(compareProductByValue)
products.sort(compareProductByValue)
console.table(products.getAll())


// assignment : combine the functionality of sortByAttr() and sortByComparer() into "sort()"

//assignment: implement filter() method
/* 
    UseCases:
        Filter by category
        Filter by cost
        Filter by units
*/

const costlyProductPredicate = (product : MyProduct) => product.cost > 50
const costlyProducts = products.filter(costlyProductPredicate);
console.log("Costly products")
console.table(costlyProducts.getAll())

const affordableProductPredicate = negate(costlyProductPredicate)
const affordableProducts = products.filter(affordableProductPredicate)
console.log("Affordable products")
console.table(affordableProducts.getAll())

const stationaryProductPredicate : Predicate<MyProduct> = p =>  p.category === 'stationary'
const stationaryProducts = products.filter(stationaryProductPredicate)
console.log("Stationary products")
console.table(stationaryProducts.getAll())