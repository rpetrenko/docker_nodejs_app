'use strict';

const express = require('express');
const os = require('os');

var hostname = os.hostname();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello from host: ' + hostname +'\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
