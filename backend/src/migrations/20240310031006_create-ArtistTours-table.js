/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('ArtistTours', table =>{
        table.increments()
        table.integer('artist_id').references('artist.id')
        table.integer('tour_id').references('tour.id')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('ArtistTours')
};
