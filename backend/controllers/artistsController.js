const config = require("../knexfile").development;
let knex = require("knex")(config);

//Get all artists
async function getArtists(req, res) {
  try {
    const artists = await knex("artist")
      .select(
        "artist.id",
        "artist.name",
        "artist.bio",
        "artist.image_url",
        // "genre.name as genre"
      )
      .from("artist")
      // .join("genre","artist.genre_id","genre.id"); // Select artist fields and genre name

    res.status(200).json(artists);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function createArtist(req, res) {
  const { name, genre_id, bio, image_url } = req.body;

  if (!name || !genre_id) { 
    return res.status(400).json({ error: 'Name and genre_id are required.' });
  }

  try {
    const artist = await knex("artist")
      .insert({ name, genre_id, bio, image_url })
      .returning("*");
    res.status(200).json(artist[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

async function updateArtist(req, res) {
  try {
    const artist = await knex("artist").where("id", req.params.id).update(req.body).returning("*");
    res.status(200).json(artist[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
async function deleteArtist(req, res) {
  try {
    const artist = await knex("artist").where("id", req.params.id).del();
    res.status(200).json(artist[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = {
  getArtists,
  createArtist,
  deleteArtist,
  updateArtist,
};
