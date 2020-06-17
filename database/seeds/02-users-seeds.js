
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const users = [
    {
      //id: 1
      username: 'Saul Greenburg',
      password: 'pass',
      department_id: 4,
      department_name: 'C-Suite'
    },
    {
      //id: 2
      username: 'Thad Scheister',
      password: 'pass',
      department_id: 4,
      department_name: 'C-Suite'
    },
    {
      //id: 3
      username: 'Chuck Johnson',
      password: 'pass',
      department_id: 1,
      department_name: 'Finance & Accounting'
    },
    {
      //id: 4
      username: 'Allison Huntington-Beech',
      password: 'pass',
      department_id: 2,
      department_name: 'Sales'
    },
    {
      //id: 5
      username: 'John Checkers',
      password: 'pass',
      department_id: 1,
      department_name: 'Finance & Accounting'
    },
    {
      //id: 6
      username: 'Ankur Malleswari',
      password: 'pass',
      department_id: 3,
      department_name: 'Engineering'
    }
  ];

  return knex("users")
    .insert(users)
    .then(() => console.log("\n== Seed data for roles table added. ==\n"));
};