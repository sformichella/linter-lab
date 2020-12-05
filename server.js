const express = require('express');
const app = express();

const { linter } = require('./linter.js')

app.use(express.json());
const port = 7890;

app.post('/api/linter', (req, res) => {
  try {
    const lintee = req.body.code;

    const lintingResult = linter(lintee);

    res.json({ passes: lintingResult });
  } catch(e) {
    res.json({ error: e.message });
  }
})

app.listen(port, () => {
  console.log(`Started on ${port}.`);
})