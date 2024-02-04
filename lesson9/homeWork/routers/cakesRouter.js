const express = require('express');
const path = require('path');
const fs = require('fs');
const { route } = require('../../routes/recipe');
// const { param } = require('../../routes/recipe');
 const recipesRouter = require('./recipesRouter ');
const cakeRouter = express.Router();

cakeRouter.get('/', (req, res) => {
    res.send('get cakes')
})
cakeRouter.post('/', (req, res) => {

})
cakeRouter.route('/:id').get((req, res) => {
    res.send(`the cake${req.params.id} added succsfaly`)

}).delete((req, res) => {
    res.send(`the cake${req.params.id} delete succsfaly`)
})
cakeRouter.use('/:id/recipesRouter' ,recipesRouter);