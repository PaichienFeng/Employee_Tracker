const connect = require('../db/connect')


module.exports={
    
    async all(){
        const db = await connect()
        
        return db.execute('SELECT * from departments');
        
    },
    
    
    async create(name){
        const db= await connect();
        return db.query(`INSERT INTO employee_db.departments (name) VALUES (?);`,name);
    },


}
