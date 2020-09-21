const express = require('express');
const app = express();
const port = 2000;
const path = require('path');
const router = require('./server/router');
const bodyParse = require('body-parser');

app.use('/', bodyParse.json());

// app.get('/api/shopping', )
app.use('/api/shopping', router);

app.use('/', express.static(path.join(__dirname, './client/dist')));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

