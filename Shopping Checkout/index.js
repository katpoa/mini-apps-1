const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = require('./server/router');
const bodyParse = require('body-parser');
const { MongoClient } = require("mongodb");


// (err, db) => {
//   if (err) {
//     res.status(400).send(err);
//   } else {
//     var collection = db.collection('cart').find().toArray(
//       (err, result) => {
//         if (err) {
//           throw err
//         } else {
//           res.status(200).send(result)
//         }
//       }
//     )
//   }
// }

app.use('/', bodyParse.json());

// app.get('/api/shopping', )
app.use('/api/shopping', router);

app.use('/', express.static(path.join(__dirname, './client/dist')));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})