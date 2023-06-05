const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const port = process.env.port || 3000


// DB connection

async function main() {
    const connectDB = await mongoose.connect('mongodb+srv://kayserbouc:BOUCbouc01@boucdb.kr4kndq.mongodb.net/boucDB');
    connectDB && console.log('DB Connected Succesfully!');
}

main().catch(err => {
    console.log(err)
    return err;
});

// routes

app.use('/v1/api', routes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})