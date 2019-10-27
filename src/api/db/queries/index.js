const UserQueries = require('./user');
const AssistanceRequestQueries = require('./assistanceRequests');
const FeedbacksQueries = require('./feedbacks');

module.exports = db => {
    return {
        user: new UserQueries(db),
        assistanceRequest: new AssistanceRequestQueries(db),
        feedback: new FeedbacksQueries(db),
    };
};
