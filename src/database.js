const sq = require('sequelize');
const poo = new sq(
        'cinema',
        'postgres',
        '1234',
        {
            host: 'localhost',
            dialect: 'postgres',
            // dialectOptions: {
            //     ssl: true
            // },
            pool:{
                max:5,
                min:0,
                require: 30000,
                idle: 10000
            },
            logging: false,
        }
    );

//const pool = new Pool({
//    connectionString: process.env.DATABASE_URL || config.db,
 //   ssl: true
//});
module.exports = poo;