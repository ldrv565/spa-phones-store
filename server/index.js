const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/phones', (req, res) => {
    db.any(
        `SELECT id_model, model.name, description, vendor.name as "vendor", price FROM model 
            RIGHT JOIN 
            ${
                req.query.vendor
                    ? `(SELECT * FROM vendor WHERE vendor.name = '${
                          req.query.vendor
                      }') as "vendor"`
                    : 'vendor'
            }
            ON model.id_vendor = vendor.id_vendor 
            ORDER BY id_model`
    )
        .then(phones => res.send(phones))
        .catch(error => console.error(error));
});

app.get('/api/cart', (req, res) => {
    db.any(
        `SELECT model.id_model, model.name, description, vendor.name as "vendor", price, count 
            FROM model INNER JOIN vendor 
            ON model.id_vendor = vendor.id_vendor 
            INNER JOIN model_order 
            ON model.id_model = model_order.id_model`
    )
        .then(phones => res.send(phones))
        .catch(error => console.error(error));
});

app.get('/api/phone/:id', (req, res) => {
    db.oneOrNone(
        `SELECT id_model, model.name, model.price, description, vendor.name as "vendor" 
        FROM model INNER JOIN vendor 
        ON model.id_vendor = vendor.id_vendor 
        WHERE id_model = ${+req.params.id}`
    )
        .then(data => {
            db.any(
                `SELECT name, value, unit from detail_value 
                LEFT JOIN detail 
                ON detail_value.id_detail = detail.id_detail 
                WHERE id_model = ${+req.params.id}`
            ).then(details => res.send({ data, details }));
        })
        .catch(error => console.error(error));
});

app.put('/api/cart/', (req, res) => {
    db.none(
        `INSERT INTO model_order (id_order, id_model, count)
                VALUES (0, ${req.query.id}, ${req.query.count}) 
            ON CONFLICT ON CONSTRAINT unique_model_in_order DO
                UPDATE
                    SET count = ${req.query.count} 
                        WHERE model_order.id_order = 0 
                        AND model_order.id_model = ${req.query.id}`
    )
        .then(res.send(true))
        .catch(error => console.error(error));
});

app.get('/api/image/:imageName', (req, res) => {
    const filepath = path.join(__dirname, '/assets/', req.params.imageName);
    res.sendFile(filepath);
});

app.get('/api/vendors', (req, res) => {
    db.any('SELECT vendor.name FROM  vendor')
        .then(vendors => res.send(vendors.map(vendor => vendor.name)))
        .catch(error => console.error(error));
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
