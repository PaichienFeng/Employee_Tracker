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
        console.log(`Added ${name} to the database`);
        return departments.create(name);
    }).catch((err)=>{
        console.log(err);
        console.log('Oops. Something went wrong.');
     })
}

module.exports=addDepartment