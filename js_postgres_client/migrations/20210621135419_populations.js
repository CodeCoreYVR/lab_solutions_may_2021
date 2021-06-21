exports.up = function (knex) {
    return knex.schema.createTable('populations', table => {
        table.bigIncrements('id');
        table.integer('year');
        table.bigInteger('quantity');
        table.bigInteger('country_id')
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('populations');
};