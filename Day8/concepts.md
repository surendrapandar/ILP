# JavaScript & React 

## Asynchronous Programming with Async/Await

Async/await is a feature introduced in ES2017 that simplifies asynchronous programming in JavaScript by allowing you to write asynchronous code in a synchronous-looking manner.

```javascript
// Example of Async/Await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

```

- `async`: The async keyword is used to define a function as asynchronous.

- `await`: The await keyword is used to pause the execution of the async function until the Promise is resolved.

#### Getting Started with React

`React` is a `JavaScript` library for building user interfaces. It's declarative, efficient, and flexible. 

### 1.  Setup React Environment:

Install `Node.js` and `npm (Node Package Manager)` Then, create a new React project using Create React App.

```javascript 
npx create-react-app my-react-app
cd my-react-app
npm start

```

## 2.  Create Components:


```javascript
// Example of a functional component
function App() {
    return (
        <div>
            <h1>Hello, React!</h1>
        </div>
    );
}

export default App;


```

### 3. Render Components:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


```

### 4 Build my App:

```javascript
// Example of stateful component
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;


```

### 5. Run Your App:

```javascript

npm start

```


# Mini Project 

complete my mini project, just a final touch is left, i will soon update the link here and also mention it in email also. 