const mongoose = require('mongoose');

//Define the MongoDB connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/myhotels' // Replace 'mydatabase' with your database name

// set up MongoDB connection
mongoose.connect(mongoURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})

//Get the default connection
//Mongoose maintains a default connection object represeting the MongoDB connection.
const db = mongoose.connection;

//Define event listeners for database connection
db.on('connected', ()=> {
    console.log('Connected to MongoDB server');
})
db.on('error', (err)=> {
    console.log('MongoDB connection error', err);
})
db.on('disconnected', ()=> {
    console.log('MongoDB disconnected');
})

//Export the database connection
module.exports = db;