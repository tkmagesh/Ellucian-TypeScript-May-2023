"use strict";
/*
    Types are just data
    Types can be manipulated the same we manipulate data
    Restrictions
        Cannot mutate type
        Cannot write imperative logic
        Iterations are possible using recursion
        Generics are supported (like functions)
*/
let x = 20; //works
// x = 100 // does not work
/* */
let age;
age = 10;
age = 21;
age = 101;
/* unknown */
let s;
// s = 10
s = "this is a string";
// s.toUpperCase()
s = 100;
if (typeof s === 'string') {
    s.toUpperCase();
}
s = true;
let str = "this is a sample string";
str.toUpperCase();
let str2;
str2 = 100;
str2.toUpperCase();
let username;
username = "Magesh";
let aon = "Magesh";
// readonly
let myAge = 100;
let validEmp = { id: 100, name: "Ann" };
let snPairs = { "id": 100, "cost": 10, "discount": 5 };
let user = {
    "id": 100, "name": "Magesh", city: "Bangalore"
}; //=> Works
// let updatedEmp : PatchEmployee = {}
// let updatedEmp: PatchEmployee = {name : "magesh"}
// let updatedEmp: PatchEmployee = { city: "bangalore" }
let updatedEmp = { name: "magesh", city: "bangalore" };
// let updatedEmp: PatchEmployee = { age: 30 } //=> Error
// ? Type with id & other attributes as optional attributes
