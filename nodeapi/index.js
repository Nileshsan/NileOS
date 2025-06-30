const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Node.js API is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
