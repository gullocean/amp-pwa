const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/src')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});
app.get('/pwa', function(req, res) {
  res.sendFile(path.join(__dirname, '/src/pwa.html'));
});

// start app
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`The production app is listening on port ${PORT}!`);
});
