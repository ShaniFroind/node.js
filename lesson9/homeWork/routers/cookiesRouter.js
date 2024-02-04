const express = require('express');
const path = require('path');
const fs = require('fs');
const cakeRouter = require('./cakesRouter');
const recipeRouter = require('./recipesRouter ')
const cookiesRouter = express.Router();

cookiesRouter.get('/',(req,res)=>{
    res.send(`get cookies`)
})
cookiesRouter.post('/',(req,res)=>{
    res.send(`post cookies`)
})
cookiesRouter.delete('/',())