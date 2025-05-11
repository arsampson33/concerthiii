/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('artist', table =>{
        table.increments()
        table.string('name').notNullable()
        table.integer('genre_id').references('genre.id')
        table.text('bio')
        table.string('image_url')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('artist')
};
