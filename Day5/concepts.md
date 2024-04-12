# JavaScript Concepts

## 1. Scope Chain & Lexical Environment

Scope chain refers to the hierarchical structure in which variables are looked up in JavaScript. This is determined by the lexical environment, which is formed by the nested scopes in code. Each function creates its own lexical scope, and when a variable is accessed, JavaScript looks for it first in the current scope and then up the chain until it finds it or reaches the global scope.

```javascript
function outer() {
    var x = 10;
    function inner() {
        console.log(x); // Accesses 'x' from the outer scope
    }
    inner();
}
outer(); // Output: 10

```

## 2. let vs const in JavaScript

`let` and `const` are __block-scoped__ declarations introduced in `ES6`. 

`let` allows reassignment of values, while `const` does not. 

Both declarations are `block-scoped`, meaning they are only accessible within the block they are declared in.

```javascript
let x = 5;
x = 10; // Valid
const y = 20;
y = 30; // Invalid, TypeError: Assignment to constant variable

```

## 3. Block Scope and Shadowing in JavaScript

`Block scope` refers to the visibility of variables within curly braces {} in JavaScript. 

Variables declared with `let` and `const` have `block scope`, meaning they are only accessible within the block they are defined in. 

`Shadowing` occurs when a variable in an `inner scope` has the same name as a variable in an outer scope, effectively hiding the outer variable.

```javascript
let x = 5;
{
    let x = 10; // Inner 'x' shadows the outer 'x'
    console.log(x); // Output: 10
}
console.log(x); // Output: 5

```

### 4. Closure in JavaScript

`Closure` refers to the ability of a function to remember and access its `lexical scope` even when it's executed outside that scope. 

This allows functions to maintain references to variables from their `parent scopes` even after the parent `function` has finished executing.

```javascript
function outer() {
    var x = 10;
    function inner() {
        console.log(x); // Closure: inner function retains access to 'x' from outer scope
    }
    return inner;
}
var closureFunc = outer();
closureFunc(); // Output: 10

```

