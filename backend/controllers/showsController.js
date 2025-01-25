
const config = require("../knexfile").development;
let knex = require("knex")(config);
const ShowService = require("../services/showService");

//Get All Shows
async function getShows(req, res) {
  try {
    const shows = await ShowService.getAllShows();
    return res.status(200).json(shows);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}


async function getShowsById(req, res) {
  try {

    console.log(req.params.id);
    res.status(200).json(shows);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function checkIfVenueExists(venueName) {
  try {
    const exists = await knex("venue").where("name", venueName).first();
    if (exists) {
      console.log("Venue already exists");
      console.log(exists.id);
      return exists.id;
    }
    const [newVenue] = await knex("venue").insert({ name: venueName }, "id");
    console.log(newVenue);
    return newVenue.id;
  } catch (error) {
    console.log(error);
  }
}

async function checkIfTourExists(tourName) {
  try {
    tourName = tourName.trim().toLowerCase();
    const exists = await knex("tour").where("name", tourName).first();
    if (exists) {
      const id = exists.id;
      console.log("Tour already exists");
      return id;
    }
    const [newTour] = await knex("tour").insert({ name: tourName }, "id");
    return newTour.id;
  } catch (error) {
    console.log(error);
  }
}
async function checkIfArtistExists(artistName) {
  try {
    artistName = artistName.trim().toLowerCase();
    const exists = await knex("artist").where("name", artistName).first();
    if (exists) {
      console.log("Artist already exists");
      return exists.id;
    }
    const [newArtist] = await knex("artist")
      .insert({ name: artistName })
      .returning("id");
    console.log(newArtist);
    return newArtist.id;
  } catch (error) {
    console.log(error);
  }
}

async function createShow(req, res) {
  try {
    const { artist_name, venue_name, tour_name, genre, dateTime, title } = req.body;
    if (!artist_name || !venue_name || !tour_name || !genre || !dateTime || !title) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await ShowService.createShow(req.body);

    return res.status(201).json({ message: "Show created successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error creating show:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function updateShow(req, res) {
  const { id } = req.params;
  const updateData = req.body;

  req.body.artist_id ? req.body.artist_id =  await checkIfArtistExists(req.body.artist_id) : null;
  req.body.venue_id ? req.body.venue_id = await checkIfVenueExists(req.body.venue_id) : null;
  req.body.tour ? req.body.tour = await checkIfTourExists(req.body.tour_id) : null;

  const validFields = [
    "title",
    "date_time",
    "artist_id",
    "venue_id",
    "tour_id",
    "genre_id",
  ];
  const updateKeys = Object.keys(updateData).reduce((acc, key) => {
    if (validFields.includes(key)) {
      acc[key] = updateData[key];
    }
    return acc;
  }, {});

  console.log(updateKeys);
  try {
    const updatedShow = await knex("show")
      .where({ id })
      .update(updateKeys);
    res.send("Show updated successfully");
  } catch (error) {
    res.status(500).send("Internal server error");
    console.log(error);
  }
}

async function deleteShow(req, res) {
  try {
    const { id } = req.params;
    await knex("show").where({ id }).del();
    res.send("Show deleted successfully");
  } catch (error) {
    console.error("Error deleting show:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getShows,
  createShow,
  getShowsById,
  updateShow,
  deleteShow,
};
