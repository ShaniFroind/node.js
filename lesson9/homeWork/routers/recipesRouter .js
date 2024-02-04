const express = require('express');
const path = require('path');
const fs = require('fs');
const cakeRouter = require('./cakesRouter');
const cookiesRouter = require('./cookiesRouter')
const recipeRouter = express.Router();

recipeRouter.route('cakeRouter/:id').get((req, res) => {
    res.send(`the resipe of cake ${req.params.id} get succsefly `)
}).post((req, res) => {
    res.send(`the resipe of cake ${req.params.id} post succsefly `)
}).delete((req, res) => {
    res.send(`the resipe of cake ${req.params.id} delete succsefly `)
}).put((req, res) => {
    res.send(`the resipe of cake ${req.params.id} put succsefly `)
});

recipeRouter.route('cookiesRouter/:id')..get((req, res) => {
    res.send(`the resipe of cookies ${req.params.id} get succsefly `)
}).post((req, res) => {
    res.send(`the resipe of cookies ${req.params.id} post succsefly `)
}).delete((req, res) => {
    res.send(`the resipe of cookies ${req.params.id} delete succsefly `)
}).put((req, res) => {
    res.send(`the resipe of cookies ${req.params.id} put succsefly `)
})

