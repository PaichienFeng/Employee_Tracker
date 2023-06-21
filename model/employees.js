const connect = require('../db/connect')


module.exports={
    
    async all(){
        const db = await connect()

        return db.execute("SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employees AS e JOIN roles AS r ON e.roles_id = r.id JOIN departments AS d ON r.departments_id = d.id LEFT JOIN employees AS m ON e.manager_id = m.id;")
        
    },
    
    
    async create(firstName, lastName, rolesID, managerID){
        const db= await connect()

        return db.execute(`INSERT INTO employee_db.employees (first_name, last_name, roles_id, manager_id) VALUES (?, ?, ?, ?)`, [firstName, lastName, rolesID, managerID])
        
    },


    async allEmployees(){
        const db = await connect()

       return db.execute('SELECT id, first_name, last_name from employees')
       
    },

}
