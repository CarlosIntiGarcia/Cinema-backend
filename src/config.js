const qe = require('querystring');
//const key = qe.generate(2048);
module.exports = {
    port: 8888 || process.env.PORT  ,
    db: process.env.DATABASE_URL || 'postgres://postgres:1234@localhost:5432/cinema',
    dbdavid: 'postgres://postgres:1234@localhost:5432/cinema',
    token_secret: 'motherFucker'
    //k_public: key.public
}