const PORT = process.env.PORT || 8080;
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());

app.use(express.static(__dirname + '/public'))

app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
)

app.listen(PORT, () =>
  let port = server.address().port
  console.log('listen to events on "port" ', port);
)
