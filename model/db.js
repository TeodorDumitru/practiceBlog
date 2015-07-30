var mongoose = require('mongoose');

var dbURI = "mongodb://icanteven:icanteven@ds047642.mongolab.com:47642/practiseblog";

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
    global.mongo_error = "Not Connected to the Database";
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

var blogpostSchema = new mongoose.Schema({
    text: String,
    author: String
});

mongoose.model('Blogpost', blogpostSchema, "blogposts");