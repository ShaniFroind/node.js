const express = require('express');
const bodyParser = require('body-parser');
const recipeRouter = require('./routers/recipesRouter ');
const cookiesRouter = require('./routers/cookiesRouter');
const cakeRouter=require('./routers/cakeRouter')
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('cakesRouter',cakeRouter);
app.use('cookiesRouter',cookiesRouter)

app.listen(port, () => {
    console.log('app is listening on port 5000... ');
    console.log('http://localhost:5000/')
})