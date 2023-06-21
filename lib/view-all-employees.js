const emp= require('../model/employees');

const viewEmployees = async () =>{
    const allEmployees= await emp.all()
    console.table(allEmployees[0]);
    return
}

module.exports=viewEmployees