exports.up = knex => {
    return knex.schema.createTable('feedbacks', table => {
        table.increments();

        table.integer('score').notNullable();
        table.string('text');
        table.integer('assistance_request_id');
        table.foreign('assistance_request_id').references('assistanceRequests.id');
        table.timestamp('dateReceieved').defaultTo(knex.fn.now());
    });
};

exports.down = knex => {
    return knex.schema.dropTable('feedbacks');
};
