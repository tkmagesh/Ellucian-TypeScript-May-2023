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
    sortByComparer(comparerFn) {
        for (let i = 0; i < this.list.length - 1; i++)
            for (let j = i + 1; j < this.list.length; j++) {
                if (comparerFn(this.list[i], this.list[j]) > 0) {
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
                }
            }
    }
    sort(by) {
        let comparerFn;
        if (!by) {
            return this.sortById();
        }
        if (typeof by === 'function') {
            comparerFn = by;
        }
        if (typeof by === 'string') {
            comparerFn = function (o1, o2) {
                if (o1[by] > o2[by])
                    return 1;
                if (o1[by] < o2[by])
                    return -1;
                return 0;
            };
        }
        for (let i = 0; i < this.list.length - 1; i++)
            for (let j = i + 1; j < this.list.length; j++) {
                if (comparerFn(this.list[i], this.list[j]) > 0) {
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
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
    filter(predicate) {
        const result = new ProductsCollection();
        for (let product of this.list) {
            if (predicate(product)) {
                result.add(product);
            }
        }
        return result;
    }
}
/*
function negate<T>(p : Predicate<T>) : Predicate<T> {
    return function(item : T) : boolean {
        return !p(item)
    }
}
*/
const negate = (p) => (item) => !p(item);
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
    sortByComparer(comparerFn) {
        for (let i = 0; i < this.list.length - 1; i++)
            for (let j = i + 1; j < this.list.length; j++) {
                if (comparerFn(this.list[i], this.list[j]) > 0) {
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
                }
            }
    }
    sort(by) {
        if (!by) {
            return this.sortById();
        }
        let comparerFn = by;
        if (typeof by === 'string') {
            comparerFn = function (o1, o2) {
                if (o1[by] > o2[by])
                    return 1;
                if (o1[by] < o2[by])
                    return -1;
                return 0;
            };
        }
        for (let i = 0; i < this.list.length - 1; i++)
            for (let j = i + 1; j < this.list.length; j++) {
                if (comparerFn(this.list[i], this.list[j]) > 0) {
                    [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
                }
            }
    }
    filter(predicate) {
        const result = new MyCollection();
        for (let item of this.list) {
            if (predicate(item)) {
                result.add(item);
            }
        }
        return result;
    }
    first(predicate) {
        for (let item of this.list) {
            if (predicate(item)) {
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
// products.sortById()
// take advantage of the optional parameter in sort() method
products.sort();
console.table(products.getAll());
console.log("Sort by attribute [cost]");
// products.sortByAttr('cost')
products.sort('cost');
console.table(products.getAll());
console.log("Sort by comparer [units]");
function compareProductByUnits(p1, p2) {
    if (p1.units > p2.units)
        return 1;
    if (p1.units < p2.units)
        return -1;
    return 0;
}
// products.sortByComparer(compareProductByUnits)
products.sort(compareProductByUnits);
console.table(products.getAll());
console.log("Sort by comparer [by value = cost * units]");
function compareProductByValue(p1, p2) {
    const p1Value = p1.cost * p1.units, p2Value = p2.cost * p2.units;
    if (p1Value > p2Value)
        return 1;
    if (p1Value < p2Value)
        return -1;
    return 0;
}
// products.sortByComparer(compareProductByValue)
products.sort(compareProductByValue);
console.table(products.getAll());
// assignment : combine the functionality of sortByAttr() and sortByComparer() into "sort()"
//assignment: implement filter() method
/*
    UseCases:
        Filter by category
        Filter by cost
        Filter by units
*/
const costlyProductPredicate = (product) => product.cost > 50;
const costlyProducts = products.filter(costlyProductPredicate);
console.log("Costly products");
console.table(costlyProducts.getAll());
const affordableProductPredicate = negate(costlyProductPredicate);
const affordableProducts = products.filter(affordableProductPredicate);
console.log("Affordable products");
console.table(affordableProducts.getAll());
const stationaryProductPredicate = p => p.category === 'stationary';
const stationaryProducts = products.filter(stationaryProductPredicate);
console.log("Stationary products");
console.table(stationaryProducts.getAll());
