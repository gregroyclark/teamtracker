const inquirer = require("inquirer");
const mysql = require("mysql");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "",
      message: "",
      name: ""
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
  ])
  .then(function(response) {

    if (response.confirm === response.password) {
      console.log("");
    }
    else {
      console.log("");
    }
  });