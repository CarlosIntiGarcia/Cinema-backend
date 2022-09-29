const app = require('./app');
const config = require('./config');
const poo = require('./database');
//const poolDB = require('./database');
//starting the serve
async function main(){
    try {
        await poo.authenticate();
        await app.listen(config.port, () => {
            console.log('server on port ',app.get('port'));
            console.log( new Date() );
        })
        console.log('Connection has been established successfully.');
    } catch(err) {
        console.error('Unable to connect to the database: ', err)
    }
};

main();

