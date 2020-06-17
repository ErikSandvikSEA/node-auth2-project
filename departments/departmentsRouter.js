const router = require('express').Router()

const Departments = require('./departmentsModel')

router.get('/', (req, res) => {
     Departments.findDepartments()
          .then(departments => {
               res.status(200).json({
                    message: 'Departments fetched',
                    departments
               })
          })
          .catch(err => {
               res.status(500).json({
                    error: err,
                    message: 'Error occurred during fetching'
               })
          })
})

module.exports = router