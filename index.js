const http = require('http');

const PORT = 8321;

const requestHandler = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('eWeLink Smart Home Add-on is running.\n');
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
