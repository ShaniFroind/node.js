const express = require('express');
const path = require('path');
const fs = require('fs');
const cakeRouter = require('./cakeRouter');
const recipeRouter = require('./recipesRouter '); // Fix the path here
const cookiesRouter = express.Router();

cookiesRouter.route('/')
    .get((req, res) => {
        res.send('get cookies');
    })
    .post((req, res) => {
        res.send('the cookies post');
    })
    .delete((req, res) => {
        res.send('the cookies delete');
    });

// Use the correct route for the id parameter
cookiesRouter.use('/:id/recipes', recipeRouter);

module.exports = cookiesRouter;
