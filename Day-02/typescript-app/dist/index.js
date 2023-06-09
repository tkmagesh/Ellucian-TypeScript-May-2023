"use strict";
function add(x, y) {
    return x + y;
}
console.log(add(100, 200));
class Employee {
    //static method
    static create(id, name, city) {
        return new Employee(id, name, city);
    }
    //accessors for fields
    get id() {
        console.log('getter-id invoked');
        return this._id;
    }
    set id(val) {
        console.log('setter-id invoked');
        this._id = val;
    }
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
    get city() {
        return this._city;
    }
    set city(val) {
        this._city = val;
    }
    constructor(id, name, city) {
        //fields
        this._id = 0;
        this._name = '';
        this._city = '';
        this._id = id;
        this._name = name;
        this._city = city;
    }
    display() {
        return `id = ${this.id}, name = ${this.name}, city = ${this.city}`;
    }
}
const emp = Employee.create(100, 'Magesh', 'Bangalore');
console.log(emp.id);
function applyDiscount(product, discountPercentage) {
    product.cost = product.cost * ((100 - discountPercentage) / 100);
}
var product = { id: 100, name: 'Pen', cost: 20 };
// var product:Product = {id : 100, name : 'Magesh', city : "Bangalore"};
console.log("Before applying discount - ", product);
applyDiscount(product, 10);
console.log("After applying discount - ", product);
function log(data) {
    console.log(`${Date()} - ${data}`);
}
/* Type Discussion */
let no = 100;
const colors = {
    "red": 1,
    "green": 2,
    "blue": 3
};
console.log(colors["red"]);
const fnArgs = [10, true, "TypeScript"];
//Arrays
const nos = [10, 20, 30, 40, 50];
const productName = "Pen";
const pe = { id: 100, name: "Pen", cost: 100, city: "Bangalore" };
/* type IdType = { id : number }
type EmployeeDTO = { name : string, salary : number}
type DomainEmployee = IdType & EmployeeDTO
const de : DomainEmployee = { id : 100, name : "Magesh", salary : 10000}
 */
