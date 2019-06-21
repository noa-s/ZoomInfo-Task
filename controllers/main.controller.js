
var express = require('express');
var router = express.Router();
// var passport = require('passport');
const request = require('request');

function getTriviaData(){
    return new Promise(async function(resolve, reject) {
        request('https://opentdb.com/api.php?amount=10&type=multiple', { json: true }, (err,res, body) => {
            if (err) reject(err) ;
            console.log(body.results);
            resolve(body.results)        
        });    
    });
}
router.get('/newQuiz', function (req, res) {
    getTriviaData()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json('cant find trivia')
        }
    );
        // https://opentdb.com/api.php?amount=10&type=multiple

    });

module.exports = router;