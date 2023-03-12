
const express = require('express');
const fs = require('fs');
const path = require('path')
const cors = require('cors')

const app = express();

require('dotenv').config()

const port = process.env.PORT || 5000;

console.log(port);

// Add CORS middleware
app.use(cors());


app.use('/admin', express.static(path.join(__dirname, '/admin')));
// app.use('/admin', express.static(path.join(__dirname, '/admin/dist')));

app.use('/', express.static(path.join(__dirname, '/public')));




app.get('/test', (req,res) => {
    res.sendFile(path.join(__dirname, '/admin'));
})



app.get('/data/jobs', (req, res, next) => {
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
    next()
});

app.get('/data', (req, res) => {
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
            res.send(data);

        }
    });
});

app.post('/data/jobs', (req, res) => {
    try {
        const newData = req.body;
        fs.readFile('db.json', (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
            } else {
                const dataArray = JSON.parse(data);
                dataArray.jobs.push(newData);
                const newDataJson = JSON.stringify(dataArray);
                fs.writeFile('db.json', newDataJson, err => {
                    if (err) {
                        console.log(err);
                        res.status(500).send('Internal Server Error');
                    } else {
                        res.status(201).send('Data added successfully');
                    }
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).send('Invalid data');
    }
});

app.put('/data', (req, res) => {
    try {
        const updatedData = req.body;
        fs.readFile('data.json', (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
            } else {
                const dataArray = JSON.parse(data);
                const index = dataArray.findIndex(item => item.id === updatedData.id);
                if (index === -1) {
                    res.status(404).send('Data not found');
                } else {
                    dataArray[index] = updatedData;
                    const updatedDataJson = JSON.stringify(dataArray);
                    fs.writeFile('data.json', updatedDataJson, err => {
                        if (err) {
                            console.log(err);
                            res.status(500).send('Internal Server Error');
                        } else {
                            res.status(200).send('Data updated successfully');
                        }
                    });
                }
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).send('Invalid data');
    }
});


app.use('*', express.static(path.join(__dirname, '/public')));


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});




