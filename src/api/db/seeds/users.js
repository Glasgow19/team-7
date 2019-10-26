const bcrypt = require('bcryptjs');
const jwtSettings = require('../../jwtSettings');

exports.seed = knex => {
    return knex('users')
        .del()
        .then(() => {
            const dummyUsers = [
                {
                    email: 'gabrijel@lospolloshermanos.com',
                    password: bcrypt.hashSync('lospollos123', jwtSettings.saltRounds),
                },
                {
                    email: 'manuel@lospolloshermanos.com',
                    password: bcrypt.hashSync('lospollos123', jwtSettings.saltRounds),
                },
                {
                    email: 'pablos@lospolloshermanos.com',
                    password: bcrypt.hashSync('lospollos123', jwtSettings.saltRounds),
                },
                {
                    email: 'sami@lospolloshermanos.com',
                    password: bcrypt.hashSync('lospollos123', jwtSettings.saltRounds),
                },
            ];

            return knex('users').insert(dummyUsers);
        });
};
