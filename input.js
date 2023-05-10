// Stores the active TCP connection object.
let connection;

// handle user input
const handleUserInput = function(data) {
  const movementObj = {"w":"Move: up", "a":"Move: left", "s":"Move: down", "d":"Move: right", "x": "Say: To Easy", "z": "Say: Look at me go", "c": "Say: Can't touch this!" };
  if (Object.keys(movementObj).includes(data)) {
    connection.write(movementObj[data]);
  }

  if (data === '\u0003') {
    process.exit();
  }
};


//setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};
setupInput();
module.exports = { setupInput };



