var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var User = require('./models/User');
var PORT = process.env.PORT || 3001;
var mongoose = require("mongoose");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


mongoose.connect("mongodb://Patrick316:marvingaye316@ds127802.mlab.com:27802/fitnessguru");
var db = mongoose.connection;


app.all('*',function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();}
);
  // get route
app.get('/create', function(req,res){
      User.find({}, function(err, docs) {
    if (!err){
        res.send(docs);
    } else {throw err;}
  });
})
  
//  post route
app.post('/create', function(req, res) {

   let data = new User(req.body);

   data.save((err, doc)=>{
    if (!err){
        console.log(`

            You have an err
            ---------------------------
              ${err}

          `)
    }else{

        res.send(doc);
        console.log(`

          New User was created!!
          ---------------------------

        `)
    }
   })
});

// /create server
app.listen(PORT, (err)=>{
    if (!err) console.log(`

            We are listening on port ${PORT}
            ------------------------------------

        `)
});