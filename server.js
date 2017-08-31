const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.options('*', cors());

app.get('/api/feature1', (req, res) => (
  res.json({works: 'it works'})
));

app.listen(3000, () => console.log(`Server has been started on ${3000}...`));

