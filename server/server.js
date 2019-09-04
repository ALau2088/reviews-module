const express = require('express');
// const bodyParser = require('body-parser');
const db = require('../database/index.js');
const cors = require('cors');

const app = express();
const PORT = 3003;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(cors())

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/reviews', (req, res) => {
  db.getData((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});