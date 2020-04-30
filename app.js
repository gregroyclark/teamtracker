const mysql = require("mysql");
const inquirer = require("inquirer");
const fs = require("fs");
const table = require("console.table");


inquirer
  .prompt([
    {
      type: "input",
      message: "",
      name: "Department Name"
    },
    {
      type: "",
      message: "",
      name: ""
    },
    {
      type: "",
      message: "",
      name: ""
    }
  ]).then(function(data) {

    var employee = data.name.toLowerCase().split(' ').join('') + ".json";

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});