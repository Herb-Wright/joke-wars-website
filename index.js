const { ifError } = require('assert/strict');
const { ObjectID } = require('bson');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');
const { writeHeapSnapshot } = require('v8');
const bodyParser = require("body-parser");

mongoose.connect('mongodb://localhost:27017/joke-wars-db');

// mongoose and express setup stuff
const db = mongoose.connection;
const Schema = mongoose.Schema;
const app = express();
const port = process.env.PORT || 5000;

// make Joke schema and model
const JokeSchema = new Schema({
    joke: String,
    name: String,
    wins: {type: Number, default: 0}
});

const Joke = db.model('Joke', JokeSchema);

// make Name schema and model
const NameSchema = new Schema({
    name: String,
    jokes: {type: [Schema.Types.ObjectId], default: []},
    wins: {type: Number, default: 0}
});

const Name = db.model('Name', NameSchema);

// do the static stuff
app.use('/', express.static(path.join(__dirname, 'html')));


app.use(cors());

// post a new joke
app.use('/post', bodyParser.json());
app.post('/post', async (req, res) => {
    try {
        new_joke = await Joke.create(req.body);
        if(!(await Name.exists({name: new_joke.name}))) {
            await Name.create({name: new_joke.name, jokes: [new_joke._id]});
        }
        else {
            old_name = await Name.findOne({name: new_joke.name});
            old_name.jokes += [new_joke._id];
        }
        res.send('nice');
    }
    catch(error) {
        console.log('error occurred: ' + error);
    }
});

// post winner of war
app.use('/war/winner', bodyParser.json());
app.post('/war/winner', async (req, res) => {
    try {
        await Joke.updateOne({joke: req.body.joke, name: req.body.name}, {$inc: {wins: 1}});
        await Name.updateOne({name: req.body.name}, {$inc: {wins: 1}});

        let the_joke = await Joke.findOne({joke: req.body.joke, name: req.body.name});
        the_joke.wins ++;
        let the_name = await Name.findOne({name: req.body.name});
        the_name.wins ++;
        res.send('nice');
    }
    catch(error) {
        console.log('error occurred while handling winner');
    }
});
// app.post('/war/winner', (req, res) => {
//     Joke.findOne(req.body, (err, result) => {
//         result.wins ++;
//         Name.findOne({name: result.name}, (er, resul) => {
//             resul.wins ++;
//         });
//     });
// });

// get two jokes to go to war
app.get('/war/jokes', async (req, res) => {
    let count = await Joke.estimatedDocumentCount();
    if(count > 1) {
        let random_1 = Math.floor(Math.random() * count);
        let random_2
        do {
            random_2 = Math.floor(Math.random() * count);
        } while(random_1 == random_2)
        let joke_1 = await Joke.findOne().skip(random_1);
        let joke_2 = await Joke.findOne().skip(random_2);
        res.json([joke_1.toObject(), joke_2.toObject()]);
    }
    else {
        console.log('not enough jokes in db');
        res.send('error: not enough jokes in database.');
    }
});

// get rankings by names
app.get('/rankings/names', async (req, res) => {
    res.json(await Name.find().lean().sort({wins: -1}).limit(10));
});

// get rankings by jokes
app.get('/rankings/jokes', async (req, res) => {
    res.json(await Joke.find().lean().sort({wins: -1}).limit(10));
});

// start server
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});