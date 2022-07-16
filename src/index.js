require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');

const indexRoute = require('./routes/index.route');

const { PORT } = process.env;
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(indexRoute);

app.listen(PORT, () => {
  console.log(`Server starting on PORT => ${PORT}`);
});
