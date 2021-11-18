require('dotenv').config();

const Sequelize = require('sequelize')

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '1689ca6392ec439caf91d04f46a7b9ce',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const { CONNECTION_STRING } = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        CREATE TABLE halos(
            halo_id SERIAL PRIMARY KEY,
            halo_name TEXT
        );
        `) .then(() => {
            rollbar.info('Database Seeded')
            res.sendStatus(200)
        }) //insert catch
    },
    insertHalo: (req, res) => {
        let {name} = req.body
        sequelize.query(`
        INSERT INTO halos (name)
        VALUES (${name})
        `) .then(dbRes => res.status(200).send(dbRes[0]))
    } //insert catch
}