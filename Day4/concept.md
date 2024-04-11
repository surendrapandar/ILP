### JavaScript Execution and Call Stack

```javascript

function greet(name) {
    console.log("Hello, " + name + "!");
}

function intro() {
    var name = "John";
    greet(name);
}

function start() {
    console.log("Starting...");
    intro();
}

// Call the start function
start();


We have three functions: greet, intro, and start.

The greet function takes a name parameter and logs a greeting message.

The intro function defines a name variable and calls the greet function with the name parameter.

The start function logs a message indicating the start and calls the intro function.

Finally, we call the start function to initiate the execution.


When this code runs:

The start function is called, and it logs "Starting...".

start calls intro.

intro defines a name variable and calls greet with the name parameter.

greet logs the greeting message.

Once all functions complete execution, they are removed from the call stack.

```


### JavaScript Hoisting

In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, regardless of where they are declared in the code.

```javascript
// Example 1: Variable Hoisting

console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

```

### Example 2: Function Hoisting

```javascript 

hello(); // Output: "Hello, World!"

function hello() {
    console.log("Hello, World!");
}
```

### Example 3: Hoisting does not work with function expressions

```javascript 
hello(); // Throws an error: TypeError: hello is not a function

var hello = function() {
    console.log("Hello, World!");
};

```


**Explanation:**

- JavaScript hoisting moves variable declarations (`var`) and function declarations to the top of their containing scope during the compilation phase.

- Variable declarations are hoisted, but the value assignments aren't. Therefore, accessing a variable before its declaration results in `undefined`.

- Function declarations are hoisted along with their definitions, allowing them to be called before they are defined.

- However, hoisting doesn't work with function expressions, as they are not declarations and therefore not hoisted.

This behavior is important to understand in JavaScript, as it can affect the order of execution and lead to unexpected results if not properly understood and handled.

