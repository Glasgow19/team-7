const bcrypt = require('bcryptjs');
const jwtSettings = require('../../jwtSettings');

exports.seed = knex => {
    return knex('users')
        .del()
        .then(() => {
            const dummyUsers = [
                {
                    email: 'gabrijel@lospolloshermanos.com',
                    fullName: 'Gabrijel Boduljak',
                    profilePhoto: 'file:///home/manuel/src/team-7/src/api/pic.jpg',
                    password: bcrypt.hashSync('lospollos123', jwtSettings.saltRounds),
                },
                {
                    email: 'manuel@lospolloshermanos.com',
                    fullName: 'Manuel Brea',
                    profilePhoto: 'file:///home/manuel/src/team-7/src/api/pic.jpg',
                    password: bcrypt.hashSync('lospollos123', jwtSettings.saltRounds),
                },
                {
                    email: 'pablos@lospolloshermanos.com',
                    profilePhoto: 'file:///home/manuel/src/team-7/src/api/pic.jpg',
                    password: bcrypt.hashSync('lospollos123', jwtSettings.saltRounds),
                },
                {
                    email: 'sami@lospolloshermanos.com',
                    profilePhoto: 'file:///home/manuel/src/team-7/src/api/pic.jpg',
                    password: bcrypt.hashSync('lospollos123', jwtSettings.saltRounds),
                },
            ];

            return knex('users').insert(dummyUsers);
        });
};
