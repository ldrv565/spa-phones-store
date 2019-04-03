const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/phones', (req, res) => {
    db.any('SELECT * FROM model')
        .then(phones => {
            res.send(phones);
        })
        .catch(error => console.error(error));
});

app.get('/api/phone/:id', (req, res) => {
    db.oneOrNone('SELECT * FROM model WHERE id_model = $1', [Number.parseInt(req.params.id, 10)])
        .then(phone => {
            res.send(phone);
        })
        .catch(error => console.error(error));
});

app.get('/api/brands', (req, res) => {
    res.send(brands);
});

app.post('/api/products', (req, res) => {
    const product = {
        id: nextId,
        title: req.body.title,
        completed: false,
    };
    nextId += 1;
    products.push(product);

    return res.send(product);
});

app.put('/api/products/:id', (req, res) => {
    const product = products.find(currentProduct => currentProduct.id === Number.parseInt(req.params.id, 10));

    if (!product) return res.sendStatus(404);

    product.title = req.body.title || product.title;

    return res.json(product);
});

app.patch('/api/products/:id', (req, res) => {
    const product = products.find(currentProduct => currentProduct.id === Number.parseInt(req.params.id, 10));

    if (!product) return res.sendStatus(404);

    product.completed = !product.completed;

    return res.json(product);
});

app.delete('/api/products/:id', (req, res) => {
    const index = products.findIndex(product => product.id === Number.parseInt(req.params.id, 10));

    if (index === -1) return res.sendStatus(404);

    products.splice(index, 1);

    return res.sendStatus(204);
});

app.get('*', (req, res) => {
    fs.readFile(`${__dirname}/build/index.html`, (error, html) => {
        if (error) throw error;

        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
});

app.listen(app.get('port'));
// , () => console.log(`Server is listening: http://localhost:${app.get('port')}`)
