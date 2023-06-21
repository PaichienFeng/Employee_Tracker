const inquirer = require("inquirer");
const departments=require('../model/departments');
const roles = require("../model/roles");



async function addRole(){
    const allDepartments= await departments.all();
    const formattedDepartments= allDepartments[0].map((department)=>department.name);
    return inquirer
    .prompt([
    {
    type:'input',
    name: 'title',
    message: "What is the name of the role?",
    },
    {
    type:'number',
    name: 'salary',
    message: "What is the salary of the role?",
    },
    {
    type:'list',
    name: 'departmentBelongTo',
    message: "Which department does the role belong?",
    choices: formattedDepartments
    },
    ]).then(async result=> {
        const {title, salary, departmentBelongTo}= result;
        const departmentId= allDepartments[0].find((department)=> department.name===departmentBelongTo).id;
        console.log(`Added ${title} to the database`);
        roles.create(title, salary, departmentId);

    }).catch((err)=>{
        console.log(err);
        console.log('Oops. Something went wrong.');
     })
}

module.exports=addRole