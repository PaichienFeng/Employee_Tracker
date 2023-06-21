const connect = require('../db/connect')


module.exports={
    
    async all(){
        const db = await connect()

        db.execute('SELECT * from employees')
        .then(result =>{
            console.table(result[0])
            return result
        })
    },
    
    
    async create([firstName, lastName, rolesID, managerID]){
        const db= await connect()

        db.execute('INSERT INTO employees (`first_name, last_name, roles_id, manager_id`) VALUES (?, ?, ?, ?)', [firstName, lastName, rolesID, managerID])
        .then(result => {
            return result[0]
        })
    },


    async allEmployees(){
        const db = await connect()

        db.execute('SELECT title from roles')
        .then(result =>{
            return result[0]
        })
    },

}
