const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var items = [];
var works = [];
var whichList = "";
app.get("/",function(req, res){
  var date = new Date();
  var options = {
    weekday: "long" ,
    day: "numeric",
    month: "long"
  };
  var day = date.toLocaleDateString("en-US");
  res.render("list",{listTitle: day, newListItems: items });

});
app.get("/work", function(req, res){
  res.render("list",{listTitle: "Work", newListItems: works})
})

app.post("/",function(req, res){
  var item = req.body.newItem;
  if(req.body.list === "Work"){
    works.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

})

app.post("/work", function(req,res){
  var item = req.body.newItems;
  whichList = Work;
  works.push(item);
  res.redirect("/work")
})

app.listen(3000,function(){
  console.log("Server has started")
});
