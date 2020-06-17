const db = require('../database/connection.js')

module.exports = {
     findDepartments
}

function findDepartments() {
     return db('departments').select('id', 'name').orderBy('id')
}