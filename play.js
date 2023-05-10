const conn = require('./client');


console.log("Connecting ...");

conn.connect();

conn.setupInput()
