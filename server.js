var express = require('express');
var path = require('path');
var app = new express();
var sslRedirect = require('heroku-ssl-redirect');
var port = process.env.PORT || 3000;
if(process.env.NODE_ENV === "production"){
    app.use(sslRedirect());
} else {

}

app.use(express.static(path.join(__dirname,'static')));
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