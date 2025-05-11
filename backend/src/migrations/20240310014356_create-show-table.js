/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('show', table =>{
        table.increments()
        table.integer('artist_id').references('artist.id').notNullable()
        table.integer('venue_id').references('venue.id')
        table.integer('tour_id').references('tour.id')
        table.integer('genre_id').references('genre.id')
        table.dateTime('date_time').notNullable()
        table.text('title')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('show')
};
