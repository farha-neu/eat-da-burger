// In models, make a burger.js file.

// Inside burger.js, import orm.js into burger.js

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

// Export at the end of the burger.js file.

var orm = require("../config/orm.js");

var burger = {
    selectAll : function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        })
    },
    insertOne : function(col,value,cb){
        orm.insertOne("burgers",col,value,function(res){
            cb(res);
        })
    },
    updateOne : function(value,condition,cb){
        orm.updateOne("burgers","devoured",value,condition,function(res){
            cb(res);
        })
    },
    delete : function(condition,cb){
        orm.delete("burgers",condition,function(res){
            cb(res);
        })
    }
};

module.exports = burger;