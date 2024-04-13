# JavaScript Concepts

## First-Class Functions

In JavaScript, functions are treated as first-class citizens, meaning they can be:
- Assigned to variables
- Passed as arguments to other functions
- Returned as values from other functions

```javascript
// Assigning function to a variable
const greet = function(name) {
    return "Hello, " + name + "!";
};

// Passing function as an argument
function sayHello(func) {
    console.log(func("John"));
}

sayHello(greet);

```


### Asynchronous Functions and Event Loop

`JavaScript` is `single-threaded`, but supports `asynchronous` programming using `functions` like `setTimeout`, `setInterval`, and `Promise`. 

The event loop manages the execution of asynchronous operations.

```javascript
// Asynchronous example with setTimeout
console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);

console.log("End");


```

### Higher-Order Functions

_Higher-order functions are functions that take other functions as arguments or return functions as results._

```javascript
// Higher-order function example
function operation(func, x, y) {
    return func(x, y);
}

function add(a, b) {
    return a + b;
}

console.log(operation(add, 5, 3)); // Output: 8


```

### Map(), Filter(), and Reduce() Functions

These are array methods in `JavaScript` used for data `transformation` and `manipulation`:

`map`: Creates a new array by applying a function to each element of the original array.

`filter`: Creates a new array with elements that pass a test specified by a function.

`reduce`: Reduces an array to a single value by executing a function for each element.

```javascript 

// Examples of map, filter, and reduce
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15


```