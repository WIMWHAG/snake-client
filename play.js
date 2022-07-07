const net = require("net");

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function() {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log('Server says: ', data);
  });

  conn.on("connect", () => {
    conn.write("Name: WIMWHAG");
  });

  return conn;
};

console.log("Connecting ...");
connect();