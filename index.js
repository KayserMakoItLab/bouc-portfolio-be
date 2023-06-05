const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const port = process.env.PORT || 3000


// DB connection

async function main() {
    const dbClusterUrl = process.env.DB_URL
    console.log('process.env.DB_URL', process.env.DB_URL);
    const connectDB = await mongoose.connect(dbClusterUrl);
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