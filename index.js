const inquirer= require('inquirer');
const viewEmployees = require('./lib/view-all-employees');
const addEmployee = require('./lib/add-employee');
const updateEmpRole=require('./lib/update-employee-role');
const viewAllRoles=require('./lib/view-all-roles');
const addRole=require('./lib/add-role');
const viewAllDepartments = require('./lib/view-all-departments');
const addDepartment = require('./lib/add-department');

async function run(){
 return inquirer
    .prompt([
        {
            type:'list',
            name: 'todo',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
        }
        
    ]).then(async ({todo})=>{
        if(todo==='View All Employees'){
            viewEmployees();    
        }else if(todo==='Add Employee'){
            await addEmployee();
        }else if(todo==='Update Employee Role'){
            await updateEmpRole();
        }else if(todo==='View All Roles'){
            await viewAllRoles()
        }else if(todo==='Add Role'){
            await addRole();
        }else if(todo==='View All Departments'){
            await viewAllDepartments();
        }else if(todo==='Add Department'){
            await addDepartment();
        }
    
    }).then(()=>{
        run();
    })
}

run()