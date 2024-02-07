const express = require('express');
const path = require('path');
const fs = require('fs');

const recipesRouter = require('./recipesRouter ');
const cakeRouter = express.Router();

cakeRouter.get('/', (req, res,next) => {
    res.send('get cakes')
    next()
})


cakeRouter.route('/:id')
.get((req, res) => {
    res.send(`the cake${req.params.id} added succsfaly`)

}).delete((req, res) => {
    res.send(`the cake${req.params.id} delete succsfaly`)
})
 cakeRouter.use('/:id/recipesRouter', recipesRouter);
module.exports = cakeRouter;