const express = require('express');
const path = require('path');

const app = express();

//serves the react app in production
app.use(express.static(path.join(__dirname, 'client/build')));

//for any url that is not covered by future routes, sends the react app
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const server = app.listen(5000, () => {
  console.log(`Running on port ${5000}...`);
});
