const inquirer = require("inquirer");
const roles=require('../model/roles');
const emp=require('../model/employees')


const allRoles= roles.allRoles();
const allEmployees= emp.allEmployees();

async function addEmployee(){

     return inquirer
        .prompt([
        {
        type:'input',
        name: 'firstName',
        message: "What is the employee's first name?",
        },
        {
        type:'input',
        name: 'lastName',
        message: "What is the employee's last name?",
        },
        {
        type:'list',
        name: 'newRole',
        message: "What is the employee's role?",
        choices: allRoles
        },
        {
        type:'list',
        name: 'newEmpManager',
        message: "What is the employee's manager?",
        choices: [allEmployees]
        },
        ]).then(result=>{
            const {firstName, lastName, newRole}=result;
        })

}

module.exports=addEmployee