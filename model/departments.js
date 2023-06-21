const connect = require('../db/connect')


module.exports={
    
    async all(){
        const db = await connect()

        return db.execute('SELECT * from departments');
        
    },
    
    
    async create(attributes){
        const db= await connect()

        return db.execute('INSERT INTO employee_db.departments (`name`) VALUES (?)', attributes)
    },


}