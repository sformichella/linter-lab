const express = require('express');
const app = express();

const { linter } = require('./linter.js')

app.use(express.json());
const port = 7890;

app.post('/api/linter', (req, res) => {
  const lintee = req.body.function;

  const lintingResult = linter(lintee);

  res.json({ passes: lintingResult })
})

app.listen(port, () => {
  console.log(`Started on ${port}.`);
})