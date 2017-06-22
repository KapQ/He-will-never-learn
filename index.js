const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require('./data.js');

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.listen(3000, function(){console.log("Moving Along")})

app.use('/Public', express.static('just.css'));

app.get('/', function(req,res){
  res.render('index', data)
})

app.get('/users/:id',function(req,res){
  let id = req.params.id - 1
  let user = data.users[id]
  res.render('user', user)
})
