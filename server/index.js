const path = require('path');
const express = require('express');
const connect = require('connect');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const db = require('./database');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.use(connect().use(cookieParser()));
app.use(
    connect().use(
        session({
            secret: 'work hard',
            resave: true,
            saveUninitialized: false
        })
    )
);

app.get('/api/authorized', (req, res) => {
    res.send(req.session.authorized);
});

const getPhonesQuery = (req, columns) =>
    `SELECT ${
        columns ? `${columns}, ` : ``
    } model.id_model, model.name, description, vendor.name as "vendor", price FROM model 
    INNER JOIN vendor 
    ON model.id_vendor = vendor.id_vendor
    ${req.query.vendor ? `WHERE vendor.name = '${req.query.vendor}'` : ''}
    `;

app.get('/api/phones', (req, res) => {
    db.any(
        `${getPhonesQuery(req)}
            ORDER BY id_model
            ${
                req.query.offset
                    ? `LIMIT ${req.query.count} OFFSET ${req.query.offset}`
                    : `LIMIT 10`
            }`
    )
        .then(phones => {
            db.oneOrNone(
                `SELECT COUNT(*) FROM (${getPhonesQuery(req)}) as "phones"`
            ).then(totalCount =>
                res.send({ data: phones, totalCount: +totalCount.count })
            );
        })
        .catch(error => console.error(error));
});

app.get('/api/cart', (req, res) => {
    db.any(
        `${getPhonesQuery(req, 'count')}
        	INNER JOIN model_order ON model.id_model = model_order.id_model
            INNER JOIN order_table ON order_table.id_order = model_order.id_order
            WHERE order_table.id_user = ${req.session.userId} AND 
            (order_table.closed is null OR order_table.closed = false )
        `
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
    db.oneOrNone(
        `SELECT id_order FROM order_table 
            WHERE order_table.id_user = ${req.session.userId} AND 
            (order_table.closed IS null OR order_table.closed = false )`
    )
        .then(id => {
            if (!id) {
                db.oneOrNone(
                    `INSERT INTO order_table (id_user)
                        VALUES (${req.session.userId})
                        RETURNING id_order;
                    `
                )
                    .then(newId =>
                        db.none(
                            `INSERT INTO model_order (id_order, id_model, count)
                                VALUES (${newId.id_order}, 
                                        ${req.query.id}, 
                                        ${+req.query.count})
                        `
                        )
                    )
                    .then(() => res.send(true));
            } else {
                db.none(
                    `INSERT INTO model_order (id_order, id_model, count)
                            VALUES (${id.id_order}, 
                                    ${req.query.id}, 
                                    ${+req.query.count})
                        ON CONFLICT ON CONSTRAINT unique_model_in_order DO
                            UPDATE
                                SET count = ${req.query.count}
                                WHERE model_order.id_model = ${req.query.id}
                                    AND model_order.id_order = ${id.id_order}`
                ).then(() => res.send(true));
            }
        })
        .catch(error => console.error(error));
});

app.put('/api/cart/close', (req, res) => {
    db.oneOrNone(
        `SELECT id_order FROM order_table 
        WHERE order_table.id_user = ${req.session.userId}
            AND (order_table.closed IS null OR order_table.closed = false )`
    ).then(idOrder => {
        const promises = _.map(
            req.body,
            (count, id) => `UPDATE model_order 
                            SET count = ${count}
                            WHERE id_model = ${id}
                            AND id_order = ${idOrder.id_order}`
        ).join(';');

        db.none(promises).then(() =>
            db.none(
                `UPDATE order_table
                        SET closed = true
                        WHERE order_table.id_order = ${idOrder.id_order}`
            )
        );
    });
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

app.post('/api/login', (req, res) => {
    if (
        req.body.login.toLowerCase() === 'thor' &&
        req.body.password === '111'
    ) {
        req.session.authorized = true;
        db.oneOrNone(
            `SELECT id_user
            FROM user_table 
            WHERE user_table.login = '${req.body.login.toLowerCase()}'`
        )
            .then(id => {
                req.session.userId = id.id_user;
                res.redirect('/');
            })
            .catch(error => console.error(error));
    } else {
        res.redirect('/');
    }
});

app.get('/api/logout/', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.post('/api/register', (req, res) => {
    if (req.body.username && req.body.password && req.body.passwordConf) {
        const userData = {
            username: req.body.username,
            password: bcrypt.hash(req.body.password)
        };
        db.none(
            `INSERT INTO user_table (login, password)
            VALUES (${userData.username}, ${userData.password}) `
        )
            .then(() => res.redirect('/profile'))
            .catch(error => console.error(error));
    }
});

app.get('*', (req, res) => {
    console.log('server get *');
    res.send(
        'Server is working. Please post at "/contact" to submit a message.'
    );
});

app.listen(app.get('port'));
