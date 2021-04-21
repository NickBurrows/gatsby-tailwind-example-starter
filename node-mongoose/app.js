const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

const path = require('path')
const app = express();

require('dotenv').config()

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT;
const dbURI = process.env.DATABASE_URL;

//model
const Tasks = require("./models/todo.model");

mongoose.Promise = global.Promise

const connect = mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection

connection.once('open', function () {
  console.log('MongoDB connection established.')
})

connect.then(
  (db) => {
    console.log("Connected Successfully to Mongodb Server");

    //all tasks
    Tasks.find({})
      .then((data) => {
        console.log("All tasks", data);
      })
      .catch((err) => {
        console.log(err);
      });

    // similary use all the other operation here

    // CAUTION: don't put all the operation together, use one operation
    // at a time
  },
  (err) => {
    console.log(err);
  }
);

// const app = express();

// app.use(express.json());

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });

const todoRoute = require('./routes/todo.routes')
app.use('/todos', todoRoute)

app.use(express.static(path.join(__dirname, '../public')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});