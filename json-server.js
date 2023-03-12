const jsonServer = require('json-server')
const express = require('express');
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const cors = require('cors')

const fs = require('fs');
const path = require('path')

require('dotenv').config()

const port = process.env.PORT || 5000;

server.use(middlewares)
// server.use(cors());

// server.use('/admin', express.static(path.join(__dirname, '/admin/dist')));
server.use('/admin', express.static(path.join(__dirname, '/admin')));
server.use('/admin/*', express.static(path.join(__dirname, '/admin')));

['/', '/services', '/works', '/vacancies', '/about'].forEach(route => server.use(route, express.static(path.join(__dirname, '/public'))))

server.get('/jobs', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    fs.readFile('db.json', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Expose-Headers', 'Content-Range')
            res.setHeader('Content-Range', 'posts 0-20/20')
            const jobs = JSON.parse(String(data)).jobs
            res.send(jobs);
        }
    });

})

server.use(router, (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range')
    res.setHeader('Content-Range', 'jobs 0-20/20')
})

// server.use('*', express.static(path.join(__dirname, '/public')));

server.listen(port, () => {
    console.log('JSON Server is running')
})