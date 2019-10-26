const path = require('path');
const basePath = path.join(__dirname, 'db');

module.exports = {
    development: {
        client: 'pg',
        connection:
            'postgres://hack_the_burgh_user:lospolloshermanos@localhost:5432/hack_the_burgh_db',
        migrations: {
            directory: path.join(basePath, 'migrations'),
        },
        seeds: {
            directory: path.join(basePath, 'seeds'),
        },
    },
};
