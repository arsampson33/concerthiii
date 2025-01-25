/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tour', table =>{
        table.increments()
        table.text('name')
        table.integer('artist_id').references('artist.id')
        table.date('start_date')
        table.date('end_date')
        table.text('description')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('tour')
};
