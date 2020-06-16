const db = require('../database/connection.js')

module.exports = {
     findUsers,
     findBy,
     add,
     findById
}

function findUsers() {
     return db('users')
          .select('id', 'username', 'department_name')
          .orderBy('id')
}

function findBy(filter){
     return db('users')
          .join('departments', 'users.department_id', 'departments.id')
          .select('users.id', 'users.username', 'users.password', 'departments.name as department_name')
          .where(filter)
          .orderBy('users.id')
}

async function add(user){
     try {
          const [id] = await db('users').insert(user, 'id')
          return findById(id)
     } catch (error){
          throw error
     }
}

function findById(id) {
     return db('users').where({ id }).first()
}