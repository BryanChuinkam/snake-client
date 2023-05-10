const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
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

module.exports = {connect};
