const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('build'));
app.use(bodyParser.json());

const state = {
	fewestGuesses : 10,
};

app.get('/fewest-guesses', function(req, res) {
    
	console.log('get req made to /fewest-guesses');
	res.json(state);
});

app.post('/fewest-guesses', function(req, res) {
	console.log(req.body);
	if (req.body.guesses < state.fewestGuesses) {
		state.fewestGuesses = req.body.guesses;
		res.json(state);
	} else {
		res.json('No update needed');
	}
});

app.listen(process.env.PORT || 8080, process.env.IP);