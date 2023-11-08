// import module sequelize
const { Sequelize } = require("sequelize");

// buat instance baru dari Sequelize
const sequelize = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  username: "root",
  password: "1dua3",
  database: "sequelize_mudah",
});

module.exports = sequelize;
