# TypeScript #
## Introduction ##
TypeScript = JavaScript + Type Safety (compilation time) + High level language feautures
- Plain old javascript is by default valid typescript

1. Replace JavaScript
    Google's Dart

2. High level languages that compile to JS
    - CoffeeScript
    - TypeScript
    - Script# (C# to JS compiler)
    - Java to JS compiler

3. Improve JS
    - ES6

## TypeScript Features ##
- let
    (var is not block scoped)
- const
- Array destructuring
    ```
        var nos = [3,1,4,2,5]
        var [x, y] = nos
        [x,y] = [y,x] //=> swapping values
    ```
- Rest operator (array)
    ```
        var nos = [3,1,4,2,5]
        var [x,y, ...z] = nos;
    ```

- Spread operator (array)
    ```
        var nos = [3,1,4,2,5]
        var newNos = [ ...nos, 10,20,30 ]

        function add(x,y){
            return x + y;
        }

        var values = [10,20]
        
        add(values[0], values[1])
        add(...values)
        
        function add(...nos){
            var result = 0;
            for (var i = 0; i < nos.length; i++)
                result += nos[i];
            return result;
        }
        
        add(10,20,30,40,50)
        add(...values)
    ```
- Object destructuring
    ```
        let emp = { id : 100, name : 'Magesh', city : 'Bangalore' }
        let {id , city} = emp
        let { id : x, city : y } = emp
    ```
- Rest operator (Object)
    ```
        let emp = { id : 100, name : 'Magesh', city : 'Bangalore' }
        let { id : x, ...z } = emp
    ```
- Spread operator (Object)
    ```
        let emp = { id : 100, name : 'Magesh', city : 'Bangalore' }
         var fullTimeEmp = { ...emp, benefits : 'Healthcare' }
    ```
- default arguments
    ```
        function add(x = 10, y = 20){
            return x + y;
        }
        
        add()
        
        add(100)
        
        add(undefined, 200)
        
        add(100,200)
    ```
- arrow functions
    ```
        /*
            //function statement
            function add(x,y){
                return x + y;
            }

            //function expression
            var add = function(x,y){
                return x + y;
            }

            //arrow function
            var add = (x,y) => {
                return x + y;
            }
            */
            var add = (x,y) => x + y;
    ```
- object construction enhancements
    ```
        var id = 100, name = 'Magesh', city = 'Bangalore'
        /*
        var emp = {
            id : id,
            name : name,
            city : city
        }
        */
        
        var emp = { 
            id, 
            name, 
            city,
            display(){
                //console.log(this.id, this.name, this.city);
                console.log(`id  = ${this.id}, name = ${this.name}, city = ${this.city}`)
            }
        }
    ```
- template strings
    ```
        var x = 100, y = 200
        var s1 = 'sum of ' + x + ' and ' + y + ' is ' + (x+y)
        var s2 = `sum of ${x} and ${y} is ${x+y}`
    ```
- Promise (ES6)
- class
    - fields
    - getters & setters
    - constructor method
    - methods
    - private, public & protected
    - static members
    - Inheritance

```
    class Employee {

        //static method
        static create(id, name, city){
            return new Employee(id, name, city)
        }
        
        //fields
        _id = 0;
        _name = '';
        _city = '';

        //accessors for fields
        get id(){
            console.log('getter-id invoked')
            return this._id;
        }
        set id(val){
            console.log('setter-id invoked')
            this._id = val;
        }

        get name(){
            return this._name;
        }
        set name(val){
            this._name = val;
        }

        get city(){
            return this._city;
        }
        set city(val){
            this._city = val;
        }

        constructor(id, name, city){
            this._id = id;
            this._name = name;
            this._city = city;
        }

        display(){
            return `id = ${this.id}, name = ${this.name}, city = ${this.city}`;
        }
    }
    
    var emp = Employee.create(100, 'Magesh', 'Bangalore')
```
```
    //Inheritance
    class FullTimeEmployee extends Employee {
        benefits = '';
        constructor(id, name, city, benefits){
            super(id, name, city);
            this.benefits = benefits
        }
        display(){
            return `${super.display()}, benefits = ${this.benefits}`
        }
    }
    var fte = new FullTimeEmployee(200, 'Suresh', 'Pune', 'Healthcare')
    fte.display()
```
- Modules
- Type safety featues (In Curriculum)
    - Interfaces
    - Enums
    - Generics
    - Decorators
    - Utility Types (for creating the type system for your application)


## Application Setup ##
- Create a folder for the application (typescript-app)
- cd typescript-app
- npm init -y (create a package.json file with defaults)
- npm install typescript --save-dev (install the typescript compiler)
- npx tsc init (create a tsconfig.json compiler configuration)
- modify the package.json 
    - {
            ...
            "scripts: {
                "build" : "tsc --watch"
            }
            ...
        }
- modify the tsconfig.json file
    - {
        "outDir" : "./dist" 
      }
- npm run build

## Executing the generated JS code ##
- in Node.js
    - cd typescript-app/dist
    - node index.js
- in the browser
    - create an index.html page
    - add a reference to the generated js file
    - run a web server
        - npx http-server -c -1
    - hit "http://localhost:8080" in the browser

## Type in TypeScript
```
    type Primitives = 
        | number
        | string
        | boolean
        | symbol
        | bigint
        | undefined
        | null

    type Literals = 
        | 20
        | "Hi there"
        | true
        | 10000n
        | .....

    type DataStructures = 
        | { key1 : boolean, key2 : string} //objects
        | { [key : string] : number } // records
        | [boolean, string] // tuples
        | number[] //arrays

```

## Object (DataStructure) ##
- Fixed number of key/value pairs
```
    type Emp = { "id" : number, "name" : string }
    let validEmp : Emp = { id : 100, name : "Ann" }
    let invalidEmp : Emp = { id : 100, name : "Magesh", city : "Bangalore}
```

## Record (DataStructure) ##
- Can have infinite number of key/value pairs
- All the keys should be of the same type
- All the values should be of the same type

## Unions & Intersections ##
```
    type Union = X | Y
    type Intersection = X & Y
```
- "Union of X | Y " = either a value of type X or value of type Y
- "Intersection of X & Y" = a value that is simultaneously of type X and Y 