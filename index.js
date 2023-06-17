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
        choices: ['View All Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
    }
]).then(({todo})=>{
    if(todo==='View All Employee'){
        emp.all()
    }
})

}

run()