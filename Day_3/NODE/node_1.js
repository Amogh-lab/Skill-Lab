import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;

app.use(express.json());

fs.readFile('jasondata_2.json', 'utf-8', (err, data) => {
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
    app.post('/switch', (req, res) => {
        const received = req.body.command; 
        if (received === 'on') {
            console.log('Received ON');
        } else if (received === 'off') {
            console.log('Received OFF');
        } else {
            console.log('Unknown command:', received);
        }
        res.send(`Received: ${received}`);
    });
    app.post('/getUserByEmail', (req, res) => {
        const emailToFind = req.body.email;
        try {
            const users = JSON.parse(data);
            const user = users.find(u => u.email === emailToFind);
    
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Error parsing user data' });
        }
    });
    
});

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
});
