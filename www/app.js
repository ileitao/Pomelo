var server,
  express = require('express'),
  app = express();

/* serves all the static files */
app.use(express.static('../www'));
/* serve main page */
app.get('/', function(req, res) {
  res.sendFile('index.html');
});
app.get('/main', function(req, res) {
  res.sendfile('index.html');
});

server = app.listen(3000, function() {
  var host = server.address().address,
    port = server.address().port;

  console.log('Example app listening at http://localhost:', port);
});