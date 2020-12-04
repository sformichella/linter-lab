const express = require('express');
const app = express();

app.use(express.json());
const port = 7890;


app.post('/api/linter', (req, res) => {
  const code = req.body;
})

app.listen(port, () => {
  console.log(`Started on ${port}.`);
})