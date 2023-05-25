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
- arrow functions
- object construction enhancements
- template strings
- Promise (ES6)
- class
    - fields
    - getters & setters
    - constructor method
    - methods
    - private, public & protected
    - static members
    - Inheritance
- Modules
- Type safety featues (In Curriculum)
    - Interfaces
    - Enums
    - Generics
    - Decorators
    - Utility Types (for creating the type system for your application)