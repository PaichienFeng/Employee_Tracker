const inquirer = require("inquirer");
const roles=require('../model/roles');
const emp=require('../model/employees')
const connect = require('../db/connect')



async function updateEmpRole(){

    const allRoles= await roles.allRoles();
    const formattedRoles= allRoles[0].map((role)=>role.title)
    const allEmployees= await emp.allEmployees();
    const formattedEmp= allEmployees[0].map((emp)=>`${emp.first_name} ${emp.last_name}`);

    // console.log(formattedEmp);
     return inquirer
        .prompt([
        {
        type:'list',
        name: 'empTobeUpdated',
        message: "Which employee's role do you want to update?",
        choices: formattedEmp
        },
        {
        type:'list',
        name: 'newRole',
        message: "Which role do you want to assign the selected employee?",
        choices: formattedRoles
        },
        ]).then(async result=>{
            const {empTobeUpdated, newRole}=result;
            const newRoleId= allRoles[0].find((role)=> role.title===newRole).id;
            const empId= allEmployees[0].find((emp)=>`${emp.first_name} ${emp.last_name}`===empTobeUpdated).id;
            const db = await connect();
            db.execute('UPDATE employee_db.employees SET roles_id = ? WHERE id = ?', [newRoleId, empId]);

        }).catch((err)=>{
            console.log(err);
            console.log('Oops. Something went wrong.');
         })
    }

    module.exports=updateEmpRole