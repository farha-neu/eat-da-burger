// Import (require) connection.js into orm.js

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.

// Import MySQL connection.
var connection = require("../config/connection.js");

var orm ={};

// Export the orm object for the model (burger.js).
module.exports = orm;