const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    //put this info into .env, replace info with process.env
  host: "",  
  port: ;
  user: "",
  password: "",
  database: ""  
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
  });