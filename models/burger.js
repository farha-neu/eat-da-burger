var orm = require("../config/orm.js");

var burger = {
    selectAll : function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        })
    },
    insertOne : function(cols,values,cb){
        orm.insertOne("burgers",cols,values,function(res){
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