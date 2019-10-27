class AssistanceRequestQueries {
    constructor(db) {
        this.db = db;
    }

    get(query = {}) {
        return this.db('feedbacks')
            .where(query)
            .orderBy('dateReceieved', 'desc');
    }

    create(feedback) {
        return this.db('feedbacks')
            .insert(feedback)
            .returning('*');
    }

    set() {
        return this.db('feedbacks');
    }
}

module.exports = AssistanceRequestQueries;
