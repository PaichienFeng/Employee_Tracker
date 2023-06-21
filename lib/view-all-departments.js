const departments= require('../model/departments');

const viewAllDepartments = async () =>{
    const allDepartments= await departments.all()
    console.table(allDepartments[0]);
    return
}

module.exports=viewAllDepartments