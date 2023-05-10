const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Connection successfully established!");
  });

  conn.on('data', (data) => {
    console.log('Incoming data: ', data);
  });

  conn.write("Name: BNC");

  return conn;
};



module.exports = { connect };
