const connect = require('../db/connect')


module.exports={
    
    async all(){
        const db = await connect()

        db.execute('SELECT * from roles')
        .then(result =>{
            return result[0]
        })
    },
    
    
    async create([title, salary, departments_id]){
        const db= await connect()

        db.execute('INSERT INTO roles (`title, salary, departments_id`) VALUES (?, ?, ?)', [title, salary, departments_id])
        .then(result => {
            return result[0]
        })
    },

    async update(newTitle, newSalary, newDepartment, id){
        const db = await connect()

        db.execute('UPDATE roles SET title = ?, salary = ?, departments_id = ? where id =?', [newTitle, newSalary, newDepartment, id])
        .then(result =>{
            return result[0]
        })
    },

}