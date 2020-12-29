const express = require('express');
const bodyParser = require('body-parser');
const { name, version } = require('./package.json');
const { APP_PORT } = require('./src/constants');

const server = express();
server.use(bodyParser.json());


server.get('/healthcheck', (req, res) => res.json({
  name,
  version,
  uptime: process.uptime()
}));

server.get('/user', require('./src/user/getUser'));
server.post('/pet', require('./src/pet/postAddPet'));

server.listen(APP_PORT, () => {
  console.log(`Service listening on ${APP_PORT}`)
});
