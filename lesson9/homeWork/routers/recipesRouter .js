const express = require('express');
const path = require('path');
const fs = require('fs');
const cakeRouter = require('./cakeRouter');
const cookiesRouter = require('./cookiesRouter')
const recipeRouter = express.Router();

recipeRouter.route('/:id')
    .get((req, res) => {
        res.send(`the recipe of cake ${req.params.id} get successfully `)
    })
    .post((req, res) => {
        res.send(`the recipe of cake ${req.params.id} post successfully `)
    })
    .delete((req, res) => {
        res.send(`the recipe of cake ${req.params.id} delete successfully `)
    })
    .put((req, res) => {
        res.send(`the recipe of cake ${req.params.id} put successfully `)
});

recipeRouter.route('')
    .get((req, res) => {
        res.send(`the recipe of cookies get successfully `)
    })
    .post((req, res) => {
        res.send(`the recipe of cookies post successfully `)
    })
    .delete((req, res) => {
        res.send(`the recipe of cookies delete successfully `)
    })
    .put((req, res) => {
        res.send(`the recipe of cookies put successfully `)
});

module.exports = recipeRouter;
