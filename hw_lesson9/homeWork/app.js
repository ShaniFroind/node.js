const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./routes/products');
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('', productRouter);
app.use('')

app.listen(port, () => {
    console.log('app is listening on port 5000... ');
    console.log('http://localhost:5000/')
})