const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('build'));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

const database = {
	fewestGuesses : 10,
};

app.get('/fewest-guesses', function(req, res) {
	console.log('get req made to /fewest-guesses');
	res.json(database);
});

app.post('/fewest-guesses', function(req, res) {
	console.log(req.body);
	if (req.body.guesses < database.fewestGuesses) {
		database.fewestGuesses = req.body.guesses;
	} 
	res.json(database.fewestGuesses);
});

app.listen(process.env.PORT || 8080, process.env.IP);