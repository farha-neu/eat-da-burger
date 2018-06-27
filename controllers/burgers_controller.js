//this page will handle all rendering->pass file and object 

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/",function(req,res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers : data
        };
       
        res.render("index",hbsObject);
    });
});

router.post("/api/burgers",function(req,res){
    var newBurger = req.body.burgerName;
    var newUser = req.body.userName;
    burger.insertOne(["burger_name","username"],[newBurger,newUser],function(result){
        res.json(result);
    });
})


router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    console.log(req.body.devour);
    
    burger.updateOne([req.body.devour], condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// Export routes for server.js to use.
module.exports = router;
