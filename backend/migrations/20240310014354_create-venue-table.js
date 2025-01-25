/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('venue', table =>{
        table.increments()
        table.text('name')
        table.text('address')
        table.text('city')
        table.text('state')
        table.text('zipcode')
        table.text('phone')
        table.text('website')
        table.text('social')
        table.integer('capacity')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('venue')
};
