const inquirer = require("inquirer");

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