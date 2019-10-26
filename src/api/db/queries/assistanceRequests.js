class AssistanceRequestQueries {
    constructor(db) {
        this.db = db;
    }

    get(query = {}) {
        return this.db('assistanceRequests')
            .where(query)
            .orderBy('dateReceieved', 'desc');
    }

    create(assistanceRequest) {
        return this.db('assistanceRequests')
            .insert(assistanceRequest)
            .returning('*');
    }

    set() {
        return this.db('assistanceRequests');
    }
}

module.exports = AssistanceRequestQueries;
