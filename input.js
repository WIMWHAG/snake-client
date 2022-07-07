const { MOVE_UP_KEY, MOVE_RIGHT_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, messages } = require('./constants');
let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } if (key === MOVE_UP_KEY) {
    connection.write('Move: up');
  } if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  } if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  } if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  } if (messages[key]) {
    connection.write(messages[key]);
  }
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
};


module.exports = { setupInput };