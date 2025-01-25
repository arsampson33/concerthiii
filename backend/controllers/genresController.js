const config = require("../knexfile").development;
let knex = require("knex")(config);

//Get All Genres
async function getGenres(req, res) {
  try {
    const genres = await knex("genre").select("*");
    res.status(200).json(genres);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

module.exports = {
  getGenres,
};
