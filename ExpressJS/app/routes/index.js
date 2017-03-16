var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;

  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('index', {
    pageTitle: 'Home',
    artwork: pagePhotos,
    pageID: 'home',
    speakers: pageSpeakers
  });



/*  res.send(`
      <link rel="stylesheet" type="text/css" href="css/style.css">
      
      <h1>Welcome to Roux Meetups</h1>

      <img src="/images/misc/background.jpg"
       alt="background" style="height: 300px;">

      <p>Roux Academy Meetups put together artists from all walks of life</p>

      <script src="/reload/reload.js"></script>
  `);*/
});

module.exports = router;




/*var http = require ('http');

var myServer = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});

    response.write('<h1>Roux Meetups</h1>');

    response.end();
});

myServer.listen(3000);
console.log('Go to http://localhost:3000 on your browser');*/