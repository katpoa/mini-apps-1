// const { MongoClient } = require("mongodb");

// var db = MongoClient.connect('mongodb://localhost:27017/shoppingcart'
//   (err, db) => {
//     if (err) {
//       throw err;
//     } else  {
//       res.status(200).send(db);
//     }

//   });

// module.exports = db;


// app.get('/api/movies', (req, res) => {
//   MongoClient.connect('mongodb://127.0.0.1:27017/', (err, database) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const movielist = database.db('movielist');
//       movielist.collection('movies').find({}).toArray((err, data) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.status(200).send(data);
//         }
//       }
//     }
//   }
// })
// app.post('/api/movies', (req, res) => {
//   MongoClient.connect('mongodb://127.0.0.1:27017/', (err, database) => {
//     if (err) {
//       console.log(err);
//     } else {
//       const movielist = database.db('movielist');

//       movielist.collection('movies').insertOne({title: ''}, ((err, data) => {
//         if (err) {
//           console.log(err);
//         } else {
//           res.status(200).send(data);
//         }
//       }
//     }
//   }
// })



// // Replace the uri string with your MongoDB deployment's connection string.
// const uri =
//   "mongodb+srv://<user>:<password>@<cluster-url>?w=majority";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();

//     const database = client.db("sample_mflix");
//     const collection = database.collection("movies");
//     // create a document to be inserted
//     const doc = { name: "Red", town: "kanto" };
//     const result = await collection.insertOne(doc);

//     console.log(
//       `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
//     );
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);