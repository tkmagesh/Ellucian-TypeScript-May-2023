/* 
    Types are just data
    Types can be manipulated the same we manipulate data
    Restrictions
        Cannot mutate type
        Cannot write imperative logic
        Iterations are possible using recursion
        Generics are supported (like functions)
*/

/* Values as types */
type twenty = 20
let x : twenty = 20 //works
// x = 100 // does not work

/* */
let age : number;
age = 10
age = 21
age = 101

/* unknown */
let s : unknown;
// s = 10
s = "this is a string"
// s.toUpperCase()
s = 100
if (typeof s === 'string'){
    s.toUpperCase()
}
s = true

let str : string = "this is a sample string"
str.toUpperCase()

let str2 : any;
str2 = 100
str2.toUpperCase()

let username : any;
username = "Magesh"


type myTrue = true
type myFalse = false
type myBoolean = myTrue | myFalse

type age = 21 | 27 | 38
type myName = "Magesh" | "Suresh" | "Ganesh"

type AgeOrName = age | myName
let aon : AgeOrName = "Magesh"

// readonly
let myAge : number  = 100 

// Object
type Emp = { "id": number, "name": string }
let validEmp: Emp = { id: 100, name: "Ann" }
// let invalidEmp: Emp = { id: 100, name: "Magesh", city: "Bangalore}

// Record
type StringNumberPair = { [key: string]: number }
let snPairs : StringNumberPair = { "id" : 100, "cost" : 10, "discount" : 5}

type keyType = "id" | "name" | "cost" | "city"
type valType = number | string | boolean
type MyRecordType = {
    [key in keyType]: valType;
};
/* 
type IdType = { "id" : number }
type NameType = { "name" : string }
type AdminType = { "isAdmin" : boolean }

type UserType = IdType & NameType
let user : UserType = { "id" : 100, "name" : "Magesh" }

type AdminUserType = UserType & AdminType
let admin: AdminUserType = { "id": 100, "name": "Magesh", "isAdmin" : true }
 */

type AdminType = { id : number, name : string, city : string, isAdmin : boolean }
// type UserType = { id : number, name : string, city : string } => Everytime AdminType changes, you have to remember to update the UserType as well
// UserType = AdminType without isAdmin
// type UserType = Omit<AdminType, "isAdmin">
type UserType = Pick<AdminType, "id" | "name" | "city">
let user: UserType = {
    "id": 100, "name": "Magesh", city: "Bangalore"
} //=> Works
// let user: UserType = { "id": 100, "name": "Magesh", city : "Bangalore", isAdmin : true } //=> Error

/* 
    Use Case for Pick / Omit
        - Create a view model from a domain model
*/

type EmployeeDomain = { id : number, name : string, city : string}
type NewEmployeeForm = Omit<EmployeeDomain, "id">


/* 
    - POST (NewEmployeeForm)
    
    EmployeeIdType = Pick(EmployeeDomain, "id")
    - PUT (EmployeeIdType, EmployeeDomain)

    - PATCH
*/

type PatchEmployee = Partial<EmployeeDomain>
// let updatedEmp : PatchEmployee = {}
// let updatedEmp: PatchEmployee = {name : "magesh"}
// let updatedEmp: PatchEmployee = { city: "bangalore" }
 let updatedEmp: PatchEmployee = { name: "magesh", city : "bangalore" }
// let updatedEmp: PatchEmployee = { age: 30 } //=> Error

// ? Type with id & other attributes as optional attributes

