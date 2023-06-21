const inquirer = require("inquirer");
const departments=require('../model/departments');



async function addDepartment(){

    return inquirer
    .prompt([
    {
    type:'input',
    name: 'name',
    message: "What is the name of the department?",
    },
    ]).then(async result=> {
        const {name}= result;
        departments.create(name);
        console.log(`Added ${name} to the database`);
    })
}

module.exports=addDepartment