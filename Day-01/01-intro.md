# TypeScript?

- Helps in ensuring type safety
- **Compile-time** type check
- JavaScript is a loosely typed language

## How to take advantage of the loosely typed nature of JS?
```
// C#
// Declaration
int x;
x = 100;
x = "This is a sample text" //<- compilation error
```

```
// JS
let x;
x = 100
x = "This is a string"
x = true
x = []
x = {}
x = function(){}
```

```
/* Write a function to add 2 number */
function add(x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error("invalid arguments")
    }
    return x + y;
}
```

```
function add(){
    function parseArg(n){
        if (typeof n === 'function') return parseArg(n());
        if (Array.isArray(n)) return add.apply(this, n);
        return isNaN(n) ? 0 : parseInt(n);
    }
    return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add.apply(this, Array.prototype.slice.call(arguments,1));
}
```

- add(10,20)
- add(10)
- add()
- add(10,"20")
- add(10,"abc")
- add([10,20],[30,40])
- add([10,20],[30,"40"])
- add([10,20],[30,"abc"])
- add([10,20],[[30,"abc"],40])
- add(function(){ return 10; }, function(){ return  20; })
- add([function(){ return [10,20]; }, function(){ return  [[30,"abc"],40]; }])
- add(function(){ return [function(){ return [10,20]; }, function(){ return  [[30,"abc"],40]; }] })

**jQuery**
```
$(domNode)
$([domNode1, domNode2...])
$(string)
$(document).ready(function(){})
$(function(){})
$($el)
```