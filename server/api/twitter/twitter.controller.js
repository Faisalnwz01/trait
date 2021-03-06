'use strict';

var _ = require('lodash');
var Twitter = require('./twitter.model');
var Twit = require('twit'); 
var watson = require('watson-developer-cloud-alpha');

var T = new Twit({
    consumer_key:         'AMWgOItJr3U3zWfQ1FaPwYfB2'
  , consumer_secret:      'DxH393RpZYF9HmukY2Gbp7FZgHp7GVa29HNn2TttvtQW9ndKMq'
  , access_token:         '2770373725-tfQ1lEUcmeAHeFSr6Wx5C9A0wxvPvIrWLbO0a1J'
  , access_token_secret:  '5btT8hBylgNc2rt3jrF47pys1TkMhAKZlKA3gj4Z2dZZD'
})


// Get list of twitters
exports.index = function(req, res) {
  Twitter.find(function (err, twitters) {
    if(err) { return handleError(res, err); }
    return res.json(200, twitters);
  });
};

// Get a single twitter
exports.show = function(req, res) {
  Twitter.findById(req.params.id, function (err, twitter) {
    if(err) { return handleError(res, err); }
    if(!twitter) { return res.send(404); }
    return res.json(twitter);
  });
};

// // Creates a new twitter in the DB.
// exports.create = function(req, res) {
//   Twitter.create(req.body, function(err, twitter) {
//     if(err) { return handleError(res, err); }
//     return res.json(201, twitter);
//   });
// };

exports.create = function(req, res) {
  
  var tweetUser = req.body.user
  var tweetsString ='';
 var tweetsplit = tweetUser.split('')
 if(tweetsplit[0]=== '@'){
   tweetsplit[0]=''
}
tweetUser = tweetsplit.join('')
  
  
  T.get('search/tweets', { q: 'from:@'+ tweetUser, count: 20 }, function(err, data, response) {
   
console.log(data);
if(data.statuses.length === 0){

  tweetsString = 'Template Demo That wont do anything at all'
}
for (var i =0;  i< data.statuses.length; i++){
  tweetsString  += data.statuses[i].text + " "; 
  }
while (tweetsString.split(' ').length < 200) {
          tweetsString += tweetsString
        }
  Twitter.create({data: tweetsString, searchTerm: tweetUser }, function(err, twitter) {
    var twitterId = twitter._id
    if(err) { return handleError(res, err); }
    return res.json(201, twitter);
  });
 })




//   var user_modeling = watson.user_modeling({
//   username: '06dae54a-7ee4-463b-bc16-6cf840af3187',
//   password: 'RKkfjuMPX4fU',
//   version: 'v2'
//   });
   
//   user_modeling.profile({
//   text: " hello my"
//   },
//   function (err, response) {
//     if (err)
//       console.log('error:', err);
//     else{
      
      
//   Twitter.findById(req.body._id).exec(function(err, twitter) {

//     twitter.watsonData = response
//     if (err) return res.send(500)
//     twitter.save(function(err, twitter) {
//       if (err) return res.send(500)
//         console.log('hit twitter saved')
//       return res.send(200)
//     })
//   })
//   }
// });



};

// Updates an existing twitter in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Twitter.findById(req.params.id, function (err, twitter) {
    if (err) { return handleError(res, err); }
    if(!twitter) { return res.send(404); }
    var updated = _.merge(twitter, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, twitter);
    });
  });
};

// Deletes a twitter from the DB.
exports.destroy = function(req, res) {
  Twitter.findById(req.params.id, function (err, twitter) {
    if(err) { return handleError(res, err); }
    if(!twitter) { return res.send(404); }
    twitter.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};


function handleError(res, err) {
  return res.send(500, err);
}