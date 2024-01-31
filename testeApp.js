const express = require('express')
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/testeApp.html')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});