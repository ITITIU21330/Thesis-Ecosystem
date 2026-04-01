require('dotenv').config();
const http = require('http');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`
  🚀 Thesis API is flying at: http://localhost:${PORT}
  📁 Logs stored at: /Volumes/UBUNTU 24_0/Thesis-Data/logs
  `);
});