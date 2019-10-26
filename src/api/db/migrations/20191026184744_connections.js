exports.up = knex => {
    return knex.schema.createTable('connections', table => {
        table.increments();
        table
            .string('connectionId')
            .notNullable()
            .unique();
        table.boolean('is_staff').defaultTo(false);
        table.integer('user_id');
        table.foreign('user_id').references('users.id');
        table.timestamp('dateReceieved').defaultTo(knex.fn.now());
    });
};
exports.down = knex => {
    return knex.schema.dropTable('connections');
};
