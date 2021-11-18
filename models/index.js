const dataConfig = require("../config/db.confg.js");
const Sequelize = require("sequelize");

const sequelizeOptions = { dialect: databaseConfig.dialect};
const sequelizeDatabase = new Sequelize(databaseConfig.connectionStringUrl, sequelizeOptions);

const database = {
    Sequelize: Sequelize,
    sequelizeDatabase: sequelizeDatabase,
};

const artiogoModel = require("./artigo.model.js");
database.artigos = artigoModel(sequelizeDatabase, Sequelize);

module.exports = database;
