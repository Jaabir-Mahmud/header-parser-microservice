const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Request Header Parser Microservice is running...');
});

app.get('/api/whoami', (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.get('User-Agent'); // ✅ use req.get() instead of req.headers

  res.json({
    ipaddress: ip,
    language: language,
    software: software
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
