exports.up = knex => {
    return knex.schema.createTable('assistanceRequests', table => {
        table.increments();
        table.json('payload').notNullable();
        table.string('connectionId');
        table.timestamp('dateReceieved').defaultTo(knex.fn.now());
        table.boolean('taken').defaultTo(false);
        table.string('status').defaultTo('Processing...');
        table.integer('staff_user_id');
        table.foreign('staff_user_id').references('users.id');
    });
};

exports.down = knex => {
    return knex.schema.dropTable('assistanceRequests');
};
