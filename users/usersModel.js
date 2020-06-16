const db = require('../database/connection.js')

module.exports = {
     findUsers,
     findBy
}

function findUsers() {
     return db('users')
          .select('id', 'username', 'department_name')
          .orderBy('id')
}

function findBy(filter){
     return db('users')
          .join('departments', 'users.department_name', 'departments.name')
          .where(filter)
          .orderBy('users.id')
}