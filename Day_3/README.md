# Skill Lab Documentation – RV College of Engineering

**Date:** April 23, 2025  
**College:** RV College of Engineering  
**Department:** AIML (Artificial Intelligence & Machine Learning)  
**Semester:** IV  

---
## Overview

In this skill lab session, we worked with the following technologies:

- **Backend**: Node.js with Express
- **Frontend**: React.js

### Backend (Node.js with Express)
We set up a basic server using Express to handle various routes and respond to requests. This server reads data from a JSON file and handles GET and POST requests.

#### Key Features:
1. **File Handling**: Reads data from `jasondata_2.json` using `fs.readFile`.
2. **GET Routes**:
    - `/`: Returns the content of `jasondata_2.json`.
    - `/data`: Responds with a simple text message "Hello".
    - `/vaibhav`: Responds with the text "Hello Vaibhav".
3. **POST Routes**:
    - `/switch`: Accepts a command (`on` or `off`), logs it to the console, and sends a response indicating the received command.
    - `/getUserByEmail`: Accepts an email, searches for the user in the JSON data, and returns the user if found. Otherwise, returns a 404 error.

#### Code Snippet:
```javascript
import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;

app.use(express.json());

fs.readFile('jasondata_2.json', 'utf-8', (err, data) => {
    if (err) throw err;
    try {
        const datajson = JSON.parse(data);
        console.log('File read successfully');
    } catch (err) {
        console.log('Error in reading file');
    }
    app.get('/', (req, res) => {
        res.write(data);
        res.end();
    });
    app.post('/switch', (req, res) => {
        const received = req.body.command;
        if (received === 'on') {
            console.log('Received ON');
        } else if (received === 'off') {
            console.log('Received OFF');
        } else {
            console.log('Unknown command:', received);
        }
        res.send(`Received: ${received}`);
    });
    app.post('/getUserByEmail', (req, res) => {
        const emailToFind = req.body.email;
        const users = JSON.parse(data);
        const user = users.find(u => u.email === emailToFind);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
});
```

# Frontend (React.js)
We created a simple React application that allows the user to increment and reset a counter.

### Key Features:
- **State Management**: The counter value is managed using useState.
- **Buttons**: Two buttons to increment the counter and reset it to zero.

### Code Snippet:
```javascript
import React, { useState } from 'react'
import './App.css'
// import Welcome from './component/welcome'

const App = () => {
  const [num, setnum]= useState(0);

  const increment=()=>{
    setnum(num+1);
  };

  const reset=()=>{
    setnum(0);
  };

  return (
    <div className='App'>
      {/* <Welcome/> */}
      <h1>Counter</h1>
      <h2>{num}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default App
```
# Setup Instructions

### 1. **Backend (Node.js)**

1. Install the necessary packages:
```bash
    npm init -y
    npm install express
```

2. Place your `jasondata_2.json` file in the root directory.

3. Create a file `node_1.js` and add the above backend code.

4. Start the server:
```bash
    node node_1.js
```

### 2. **Frontend (React)**

1. Use Frontend ( VITE + REACT-js )
```bash
    npm install
    npm run dev
```

2. Replace the contents of `src/App.js` with the above React code.

3. Start the React app:
```bash
    npm run dev
```

# Summary

In this session, we successfully implemented a basic backend using Node.js and Express to serve and handle requests. Additionally, we created a simple React counter app with state management and event handling for increment and reset functionality. This laid the foundation for building more complex applications with Node.js and React.

# Notes

- Make sure to handle asynchronous file reads properly in Express applications.
- For larger data handling, consider using a database instead of reading from a static JSON file.
- React’s `useState` hook is useful for managing simple state like a counter.



