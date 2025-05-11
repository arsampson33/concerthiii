const config = require("../knexfile").development;
let knex = require("knex")(config);
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
class ShowService {
  async getAllShows() {
    try {
      const shows = await knex("show")
        .select(
          "show.id as show_id", // "show.id as show_id" is an alias for "show.id" and will be returned as "show_id" in the response
          "show.title",
          "show.date_time",
          "artist.name as artist_name",
          "venue.name as venue_name",
          "genre.name as genre_name"
        )
        .from("show")
        .join("artist", "show.artist_id", "artist.id")
        .join("venue", "show.venue_id", "venue.id")
        .join("genre", "show.genre_id", "genre.id");
      return shows;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async getShowById(id) {
    try {
      const shows = await knex("show")
        .where("show.id", req.params.id)
        .select(
          "show.title",
          "show.date_time",
          "artist.name as artist_name",
          "venue.name as venue_name",
          "genre.name as genre_name"
        )
        .from("show")
        .join("artist", "show.artist_id", "artist.id")
        .join("venue", "show.venue_id", "venue.id")
        .join("genre", "show.genre_id", "genre.id");
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async createShow(req) {
    try {
      // Extract data from the request body
      const { artist_name, venue_name, tour_name, genre, dateTime, title } =
        req;
      // Validate the incoming data (optional)
      const artistId = await checkIfArtistExists(artist_name);
      const venueId = await checkIfVenueExists(venue_name);
      const tourId = await checkIfTourExists(tour_name);
      // Insert the new show into the database
      await knex("show").insert({
        artist_id: artistId,
        venue_id: venueId,
        tour_id: tourId,
        genre_id: genre,
        date_time: dateTime,
        title: title,
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async updateShow(showId, updateData) {
    updateData.artist_id
      ? (updateData.artist_id = await checkIfArtistExists(req.body.artist_id))
      : null;
    updateData.venue_id
      ? (updateData.venue_id = await checkIfVenueExists(req.body.venue_id))
      : null;
    updateData.tour
      ? (updateData.tour = await checkIfTourExists(req.body.tour_id))
      : null;

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
      const updatedShow = await knex("show").where(showId).update(updateKeys);
      res.send("Show updated successfully");
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

module.exports = new ShowService();
