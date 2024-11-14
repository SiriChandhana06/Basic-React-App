const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
require ("dotenv").config();
const UserData = require('./model/userModel');

const app = express();
const port = 5000 ;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('db connected sucessfully'))
.catch((error)=>console.log('error to connect db',error));

app.post('/api/userdata', async (req, res) => {
    try {
        const newUserData = new UserData(req.body);
        await newUserData.save();
        res.status(201).json(newUserData);
    } catch (error) {
        res.status(500).json({ message: 'Error saving user data' });
    }
});


app.get('/api/userdata', async (req, res) => {
    try {
        const userData = await UserData.find();
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user  data' });
    }
});

app.listen(port, () => {
    console.log('Server is running');
});