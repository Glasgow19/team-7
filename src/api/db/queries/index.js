const UserQueries = require('./user');
const AssistanceRequestQueries = require('./assistanceRequests');

module.exports = db => {
    return {
        user: new UserQueries(db),
        assistanceRequest: new AssistanceRequestQueries(db),
    };
};
