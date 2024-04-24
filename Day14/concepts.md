# Busboy Middleware, Controllers, and Database Models in Express

## Introduction

1. Busboy Middleware: A middleware for handling file uploads in Express. 

2. Controllers: Functions that handle HTTP requests and responses, keeping route logic organized.

3. Database Models: Structures that represent data and interact with the database, typically using an ORM (Object-Relational Mapping) library like Mongoose for MongoDB.

## Busboy Middleware

``` javascript 
const express = require('express');
const busboy = require('busboy');

const app = express();

app.post('/upload', (req, res) => {
  const bb = new busboy({ headers: req.headers });

  bb.on('file', (fieldname, file, filename, encoding, mimetype) => {
    // Handle file upload
  });

  req.pipe(bb);
});

```

Controllers

```javascript 
// controllers/uploadController.js
exports.uploadFile = (req, res) => {
  // Handle file upload logic
  res.send('File uploaded successfully');
};

// routes.js
const express = require('express');
const router = express.Router();
const uploadController = require('./controllers/uploadController');

router.post('/upload', uploadController.uploadFile);


```

Database Models

```javascript 
// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

module.exports = mongoose.model('User', userSchema);

```

CRUD operations

```javascript 

// controllers/userController.js
const User = require('../models/User');

exports.createUser = async (req, res) => {
  const { name, email, age } = req.body;
  const newUser = new User({ name, email, age });
  await newUser.save();
  res.status(201).json(newUser);
};

```