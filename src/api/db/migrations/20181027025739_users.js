exports.up = knex => {
    return knex.schema.createTable('users', table => {
        table.increments();
        table
            .string('email')
            .notNullable()
            .unique();
        table.string('password').notNullable();
        table.string('fullName');
        table.string('profilePhoto');
    });
};

exports.down = knex => {
    return knex.schema.dropTable('users');
};
