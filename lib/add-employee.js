const inquirer = require("inquirer");
const roles=require('../model/roles');
const emp=require('../model/employees');
const connect = require('../db/connect')



async function addEmployee(){

    const allRoles= await roles.allRoles();
    const formattedRoles= allRoles[0].map((role)=>role.title)
    const allEmployees= await emp.allEmployees();
    const formattedEmp= allEmployees[0].map((emp)=>`${emp.first_name} ${emp.last_name}`);

    // console.log(formattedEmp);
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
        choices: formattedRoles
        },
        {
        type:'list',
        name: 'newEmpManager',
        message: "What is the employee's manager?",
        choices: formattedEmp
        },
        ]).then(async result=>{
            const {firstName, lastName, newRole, newEmpManager}=result;
            const roleId= allRoles[0].find((role)=> role.title===newRole).id;
            const managerId= allEmployees[0].find((emp)=>`${emp.first_name} ${emp.last_name}`===newEmpManager).id;
            emp.create(firstName, lastName, roleId, managerId);
            console.log(`Added ${firstName} ${lastName} to the database`);

        }).catch((err)=>{
            console.log(err);
            console.log('Oops. Something went wrong.');
         })
         

}

module.exports=addEmployee