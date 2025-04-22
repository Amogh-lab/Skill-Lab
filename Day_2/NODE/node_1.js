// import express correctly if using ES modules
import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;


fs.readFile('data.json', 'utf-8', (err, data) => {
    if(err) throw(err);
    try {
        const datajson=JSON.parse(data);
        console.log('FIle read Succesfully');
    }
    catch(err)
    {
        console.log('Error in reading file');
    }
    app.get('/', (req, res) => {
        // res.send("Hello");
        res.write(data);
        res.end();
    });
    app.get('/data', (req, res) => {
        res.send("Hello");
        // res.write(data);
        res.end();
    });
    app.get('/vaibhav', (req, res) => {
        res.send("Hello Vaibhav");
        // res.write(data);
        res.end();
    });
});

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
});
