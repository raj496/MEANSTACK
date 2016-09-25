var express = require('express');
var app= express();
var mongojs=require('mongojs');
var db=mongojs('contactlist',['contactlist']);
var bodyparser=require('body-parser');

app.use(express.static(__dirname+"/public"));
app.use(bodyparser.json());
app.get('/contactlist', function (req,res) {
console.log("I received a GET request")

db.contactlist.find(function(err,doc){

console.log(doc);
res.json(doc);

});

});


app.post('/contactlist',function(req,res) {
console.log(req.body);
db.contactlist.insert(req.body, function(err, doc){
res.json(doc);
});
});
app.listen(3000);
console.log("server running on port 3000");
