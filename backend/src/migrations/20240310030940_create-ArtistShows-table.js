/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('ArtistShows', table =>{
    table.increments()
    table.integer('artist_id').references('artist.id')
    table.integer('show_id').references('show.id')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('ArtistShows')
};
