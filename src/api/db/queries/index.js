const UserQueries = require('./user');

module.exports = db => {
    return {
        user: new UserQueries(db),
    };
};
