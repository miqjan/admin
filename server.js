var app = new (require('express'))();
var sslRedirect = require('heroku-ssl-redirect');
var port = process.env.PORT || 3000;
app.use(sslRedirect());
app.get("/", function(req, res) {
  res.sendFile(__dirname + "static" + '/index.html');
})

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. ", port);
  }
})