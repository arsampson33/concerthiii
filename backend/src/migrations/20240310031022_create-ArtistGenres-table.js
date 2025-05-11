/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('ArtistGenres', table =>{
        table.increments()
        table.integer('artist_id').references('artist.id')
        table.integer('genre_id').references('genre.id')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('ArtistGenres')
};
