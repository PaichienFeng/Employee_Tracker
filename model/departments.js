const connect = require('../db/connect')


module.exports={
    
    async all(){
        const db = await connect()

        db.execute('SELECT * from departments')
        .then(result =>{
            return result[0]
        })
    },
    
    
    async create(attributes){
        const db= await connect()

        db.execute('INSERT INTO departments (`name`) VALUES (?)', attributes)
        .then(result => {
            return result[0]
        })
    },


}