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