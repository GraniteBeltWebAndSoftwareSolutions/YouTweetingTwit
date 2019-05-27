console.log('The Bot is starting');

var Twit = require('twit');

var config = require('./config');

console.log(config);

var T = new Twit(config);




//
//  tweet 'hello again...'
//
T.post('statuses/update', { status: 'I said hello again...' }, function(err, data, response) {
  console.log(data)
})









/*
// this does what it looks like it would do
T.get('search/tweets', { q: 'kurtcobain since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
})


*/