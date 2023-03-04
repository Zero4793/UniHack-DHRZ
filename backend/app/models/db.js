const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;

  // create sql table
  let table = `create table if not exists customers(
                    id int primary key auto_increment,
                    fname varchar(255) not null,
                    lname varchar(255) not null,
                    age int not null,
                    email varchar(255) not null,
                    happy int,
                    cry int,
                    laugh int,
                    fearai int
                )`;
  connection.query(table, function(err, results, fields) {
    if (err) {
        console.log(err.message);
    }
  })
  console.log("Successfully connected to the database.");
});

module.exports = connection;