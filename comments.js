// Create web server
// 1. Load modules
var express = require('express');
var bodyParser = require('body-parser');

// 2. Create web server
var app = express();

// 3. Set up web server
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 4. Set up routing
app.get('/comments', function (req, res) {
    console.log('GET comments');
    res.send('GET comments');
});

app.post('/comments', function (req, res) {
    console.log('POST comments');
    res.send('POST comments');
});

// 5. Start web server
app.listen(3000, function () {
    console.log('Server running at http://localhost:3000');
});
