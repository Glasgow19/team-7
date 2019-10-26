exports.up = knex => {
    return knex.schema.createTable('assistanceRequests', table => {
        table.increments();
        table.json('payload').notNullable();
        table.string('connectionId').unique();
        table.timestamp('dateReceieved').defaultTo(knex.fn.now());
    });
};

exports.down = knex => {
    return knex.schema.dropTable('assistanceRequests');
};
