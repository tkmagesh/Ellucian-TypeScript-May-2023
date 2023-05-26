

function add(x : number, y : number) : number {
    return x + y;
}

console.log(add(100,200))

class Employee {

    //static method
    static create(id : number, name : string, city : string ) {
        return new Employee(id, name, city)
    }

    //fields
    private _id : number = 0;
    private _name : string = '';
    private _city : string = '';

    //accessors for fields
    get id() : number {
        console.log('getter-id invoked')
        return this._id;
    }
    set id(val : number) {
        console.log('setter-id invoked')
        this._id = val;
    }

    get name() : string {
        return this._name;
    }
    set name(val : string) {
        this._name = val;
    }

    get city() : string {
        return this._city;
    }
    set city(val : string) {
        this._city = val;
    }

    constructor(id : number, name : string, city : string) {
        this._id = id;
        this._name = name;
        this._city = city;
    }

    display() : string {
        return `id = ${this.id}, name = ${this.name}, city = ${this.city}`;
    }
}

const emp = Employee.create(100, 'Magesh', 'Bangalore')
console.log(emp.id)


//using object literal type
/* 
function applyDiscount(product : { id : number, name : string, cost : number}, discountPercentage : number){
    product.cost = product.cost * ((100-discountPercentage)/100)
} 

// var product : { id: number, name: string, cost: number }  = { id: 100, name: 'Pen', cost: 10 }
// var product: { id: number, name: string, cost: number } = {id : 100, name : 'Magesh', city : "Bangalore"};

// var product:Product = {id : 100, name : 'Magesh', city : "Bangalore"};
console.log("Before applying discount - ", product)
applyDiscount(product, 10)
console.log("After applying discount - ", product)
*/

//using the interface (interfaces are used to define the object structure)
/* 
interface Product {
    id : number,
    name : string,
    cost : number
}

function applyDiscount(product: Product, discountPercentage: number) {
    product.cost = product.cost * ((100 - discountPercentage) / 100)
}

var product :Product  = { id: 100, name: 'Pen', cost: 10 }
// var product:Product = {id : 100, name : 'Magesh', city : "Bangalore"};
console.log("Before applying discount - ", product)
applyDiscount(product, 10)
console.log("After applying discount - ", product) 
*/


//using type
type Product = {
    id: number,
    name: string,
    cost: number
}

function applyDiscount(product: Product, discountPercentage: number) {
    product.cost = product.cost * ((100 - discountPercentage) / 100)
}

var product: Product = { id: 100, name: 'Pen', cost: 20 }
// var product:Product = {id : 100, name : 'Magesh', city : "Bangalore"};
console.log("Before applying discount - ", product)
applyDiscount(product, 10)
console.log("After applying discount - ", product)



function log(data : any){
    console.log(`${Date()} - ${data}`)
}

/* Type Discussion */

let no : 100 = 100

//Records
type Colors = { [name : string] : number }
const colors : Colors = {
    "red" : 1,
    "green" : 2,
    "blue" : 3
}
console.log(colors["red"])

//Tuples
type FnArgs = [number, boolean, string]
const fnArgs : FnArgs = [10, true, "TypeScript"]

//Arrays
const nos : number[] = [10,20,30,40,50]

/* Unions */
// (fixed set of product names - Pen, Pencil, Marker, Scribble-Pad)
type ProductNames = "Pen" | "Pencil" | "Marker" | "Scribble-Pad" 
const productName : ProductNames = "Pen"

/* Intersection */
type ProductType = {
    id: number,
    name: string,
    cost: number
}

type EmployeeType = {
    id: number,
    name: string,
    city: string
}

type ProductEmployee = ProductType & EmployeeType
const pe : ProductEmployee = { id : 100, name : "Pen", cost : 100, city : "Bangalore" }

type IdType = { id : number }
type EmployeeDTO = { name : string, salary : number}
type DomainEmployee = IdType & EmployeeDTO
const de : DomainEmployee = { id : 100, name : "Magesh", salary : 10000}


