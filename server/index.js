const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
const keys = require('./config/keys');

// DB Setup
mongoose.connect('mongodb://localhost/movie-finder');
mongoose.connect('mongodb://localhost/movie-finder');
mongoose.connect(keys.mongoURI);


// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
