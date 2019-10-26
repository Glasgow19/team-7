class AssistanceRequestQueries {
    constructor(db) {
        this.db = db;
    }

    get(query = {}) {
        return this.db('assistanceRequests').where(query);
    }

    create(assistanceRequest) {
        return this.db('assistanceRequests').insert(assistanceRequest);
    }
}

module.exports = AssistanceRequestQueries;
