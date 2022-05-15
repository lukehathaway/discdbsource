const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use('/api/manufacturers', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.sendFile(path.join(__dirname + '/manufacturers.json'));
});

app.use('/api/molds', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.sendFile(path.join(__dirname + '/molds.json'));
});

app.listen('8080', () => console.log('Server listening on 8080'));