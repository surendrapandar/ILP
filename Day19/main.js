const express = require('express');

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('Hello, My Node app is running in docker!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
