const roles= require('../model/roles');

const viewAllRoles = async () =>{
    const allRoles= await roles.all()
    console.table(allRoles[0]);
    return
}

module.exports=viewAllRoles