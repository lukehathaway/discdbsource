const express = require('express');
const manufacturers = require('./manufacturers.json');
const molds = require('./molds');

const app = express();
const port = 8080;

app.use('/api/manufacturers', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  const allManufacturers = manufacturers.manufacturers.map(manufacturer => {
    return manufacturer.name;
  });
  res.send(allManufacturers);
});

app.use('/api/molds/all', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  const allMoldNames = molds.molds.map(mold => {
    return mold.name;
  });
  res.send(allMoldNames );
});

app.get('/api/molds/:manufacturer', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  const manufacturer = req.params.manufacturer;
  // TODO: refactor this into one function
  const filteredMolds = molds.molds.filter(mold => {
    return mold.manufacturer === manufacturer;
  });
  const filteredMoldsNames = filteredMolds.map(mold => {
    return mold.name;
  });
  res.send(filteredMoldsNames)
});

app.get('/api/molds/:manufacturer/:mold', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  const selectedMold = molds.molds.filter(mold => {
    return mold.manufacturer === req.params.manufacturer && mold.name === req.params.mold;
  });
  res.send(selectedMold);
})

app.listen('8080', () => console.log('Server listening on 8080'));