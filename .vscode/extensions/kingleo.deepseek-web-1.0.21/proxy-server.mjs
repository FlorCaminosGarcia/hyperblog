import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

app.get('*', async (req, res) => {
  const targetUrl = `https://chat.deepseek.com${req.url}`;
  try {
    const response = await fetch(targetUrl, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    });
    res.status(response.status);
    response.headers.forEach((value, name) => {
      res.setHeader(name, value);
    });
    const data = await response.text();
    res.send(data);
  } catch (error) {
    res.status(500).send('Error fetching the target URL');
  }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});