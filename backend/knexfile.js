// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
      client:"pg",
      connection:{
          host: "localhost",
          database:"concerthiii"
      }
  }
}
