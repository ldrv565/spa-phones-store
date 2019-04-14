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
    db.any('SELECT id_model, model.name, description, vendor.name as "vendor" FROM model INNER JOIN vendor ON model.id_vendor = vendor.id_vendor')
        .then(phones => res.send(phones))
        .catch(error => console.error(error));
});

app.get('/api/phone/:id', (req, res) => {
    db.oneOrNone(`SELECT id_model, model.name, description, vendor.name as "vendor" FROM model INNER JOIN vendor ON model.id_vendor = vendor.id_vendor WHERE id_model = ${+req.params.id}`)
        .then(data => {
            db.any(`SELECT name, value, unit from detail_value left join detail on detail_value.id_detail = detail.id_detail WHERE id_model = ${+req.params.id}`)
                .then(details => res.send({data, details}))
        })
        .catch(error => console.error(error));
});

app.get('/api/image/:imageName', (req, res) => {
    const filepath = path.join(__dirname, '/assets/', req.params.imageName);
    console.log(filepath);
    res.sendFile(filepath);
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
