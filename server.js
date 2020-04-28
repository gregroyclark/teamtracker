const inquirer = require("inquirer");
const mysql = require("mysql");
const dotenv = require("dotenv")

const connection = mysql.createConnection({
    //put this info into .env, replace info with process.env
  host: process.env.host,  
  port: process.env.port,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database  
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
  });