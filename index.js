const inquirer= require('inquirer');
const emp = require('./model/employees');

inquirer
.prompt([
    {
        type:'list',
        name: 'todo',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
    }
    
]).then(({todo})=>{
    if(todo==='View All Employees'){
     viewEmployees()
    }
})

const viewEmployees = async () =>{
    const allEmployees= await emp.all()
    console.table(allEmployees);
    return 
}
