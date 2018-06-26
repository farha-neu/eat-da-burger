// Import MySQL connection.
var connection = require("../config/connection.js");

var orm ={
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM "+table+";";
        connection.query(queryString,function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table,col,value,cb){
        var queryString = "INSERT INTO "+table+" ("+col+") VALUES (?);";
        connection.query(queryString,[value],function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(table,col,value,condition,cb){
        var queryString = "UPDATE "+table+" SET "+col+" = ? "+ "WHERE "+condition;
        var query = connection.query(queryString,[value],function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        });
        console.log(query.sql);
    },
    delete: function(table,condition,cb){
        var queryString = "DELETE FROM "+table+" WHERE "+condition;
        var query = connection.query(queryString,function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        });
        console.log(query.sql);
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;