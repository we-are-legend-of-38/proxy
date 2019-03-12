const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3002;

app.use(express.static('public'));

app.listen(port);