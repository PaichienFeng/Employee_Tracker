const connect = require('../db/connect')


module.exports={
    
    async all(){
        const db = await connect()

       return db.execute(`
       SELECT roles.id, roles.title, departments.name AS department, roles.salary
       FROM employee_db.roles
       JOIN employee_db.departments ON roles.departments_id = departments.id
     `)

    },
    
    async allRoles(){
        const db = await connect()

       return db.execute('SELECT * FROM roles')

    },
    
    async create(title, salary, departments_id){
        const db= await connect()

        return db.execute(`INSERT INTO employee_db.roles (title, salary, departments_id) VALUES (?, ?, ?)`, [title, salary, departments_id])
        
    },

    async update(newTitle, newSalary, newDepartment, id){
        const db = await connect()

        db.execute('UPDATE roles SET title = ?, salary = ?, departments_id = ? where id =?', [newTitle, newSalary, newDepartment, id])
        .then(result =>{
            return result[0]
        })
    },

}