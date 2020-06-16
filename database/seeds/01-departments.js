exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const departments = [
    {
      name: "Finance & Accounting", // will get id 1
    },
    {
      name: "Sales", // will get id 2
    },
    {
      name: "Engineering", // will get id 3
    },
    {
      name: "C-Suite", // will get id 4
    }
  ];

  return knex("departments")
    .insert(departments)
    .then(() => console.log("\n== Seed data for roles table added. ==\n"));
};
