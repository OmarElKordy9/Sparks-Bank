const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://kordy-sparksbank.herokuapp.com");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  if (req.method == "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// app.use(cors());

const corsOption = {
  origin: ['https://kordy-sparksbank.herokuapp.com'],
};
app.use(cors(corsOption));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connections established successfully");
})

const transactionsRouter = require('./routes/transactions');
const usersRouter = require('./routes/users');

app.use('/api/transactions', transactionsRouter);
app.use('/api/users', usersRouter);

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});