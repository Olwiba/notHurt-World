const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, '/../public')));

console.log('listening on port ' + port);
app.listen(port);