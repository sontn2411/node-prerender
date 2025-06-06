const express = require('express');
const prerender = require('prerender-node');
const path = require('path');

const app = express();

app.use(
  prerender
    .set('prerenderToken', 'Cqaw4UJ1fuNz7732bOAI')
    .set('protocol', 'http')
);


app.use(express.static('dist'));


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
});
