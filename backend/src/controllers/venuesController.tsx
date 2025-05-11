import { supabase } from "../../src/lib/supabase";

const config = require("../knexfile").development;
let knex = require("knex")(config);

// async function checkIfVenueExists(venueName) {
//   const exists = await knex("venue").where("name", venueName).first();
//   if (exists) {
//     console.log("Venue already exists");
//     console.log(exists.id);
//     return exists.id;
//   } else {
//     console.log("hit");
//     return false;
//   }
// }

// GET all venues
async function getAllVenues() {
  try {
    const {data, error, status} = await supabase.from('venues').select('*');
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// // GET a specific venue by ID
// async function getVenueById(req, res) {
//   try {
//     const venue = await knex("venue").where("id", req.params.id).first();
//     res.status(200).json(venue);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
// }

// // CREATE a new venue
// async function createVenue(req, res) {
//   const {
//     name,
//     address,
//     city,
//     state,
//     zipcode,
//     phone,
//     website,
//     social,
//     capacity,
//   } = req.body;
//   const venueCheck = await checkIfVenueExists(name);
//   if (!venueCheck) {
//     try {
//       const venue = await knex("venue").insert({
//         name: name,
//         address: address,
//         city: city,
//         state: state,
//         zipcode: zipcode,
//         phone: phone,
//         website: website,
//         social: social,
//         capacity: capacity,
//       });
//       res.status(201).json(venue);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json(error);
//     }
//   } else {
//     return false;
//   }
// }

// // UPDATE an existing venue
// const updateVenue = (req, res) => {
//   try{
//     knex("venue")
//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
//   // Extract the venue ID from the request parameters
//   // Extract the updated venue data from the request body
//   // Implement logic to update the venue with the given ID in the database using the updated data
//   // Return the updated venue as a response
// };

// // DELETE a venue
// const deleteVenue = (req, res) => {
//   // Extract the venue ID from the request parameters
//   // Implement logic to delete the venue with the given ID from the database
//   // Return a success message as a response
// };

// Export the controller functions
module.exports = {
  getAllVenues,
  // getVenueById,
  // createVenue,
  // updateVenue,
  // deleteVenue,
};
