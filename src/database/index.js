// DB connection config being exposed from here

const DbConfig = require('./config');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const DbConnection = mongoose.connect(DbConfig.url, {
    useNewUrlParser: true
})
    .then(() => {
        console.log(`Connection successfull`)
    })
    .catch(err => {
        console.log(`Connection failed \n . Error: ${err}`);
        process.exit();
    });

module.exports = DbConnection;