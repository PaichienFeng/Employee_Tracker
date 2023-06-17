const inquirer= require('inquirer');
const dep = require('./model/departments');
const emp = require('./model/employees');
const role =require('./model/roles');


function run(){
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
        console.log(todo);
        const allEmployees= await emp.all();
        console.table(allEmployees);
    }else if(todo==='Add Employee'){
        console.log(todo);
        return inquirer
        .prompt([
        {
        type:'input',
        name: 'firstName',
        message: "What is the employee's first name?",
        }
        ]).then(({name})=>{
            console.log(name);
        })
    }
})

}

run()