import { Router, Request, Response } from "express";
import knex from "../database";

// Get all events
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await knex("events").select("*");
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
};

export async function createEvent(req: Request, res: Response) {
  const trx = await knex.transaction();
  try {
    const {
      name,
      eventType,
      dateStart,
      venue,
      city,
      description,
      artist,
      userID,
    } = req.body;

    console.log("User ID: ", userID);

    // Check if artist exists
    const artistId = await checkIfArtistExists(artist, trx);
    if (!artistId) {
      await trx.rollback();
      return res.status(404).json({ error: "Artist not found" });
    }

    // Insert new event
    const [newEvent] = await trx("events")
      .insert({
        name,
        event_type: eventType,
        date_start: dateStart,
        venue_id: venue || null,
        city,
        description
      })
      .returning("*");

    // Insert into event_artists
    const joinEventArtist = await trx("event_artists")
      .insert({
        event_id: newEvent.id,
        artist_id: artistId,
      })
      .returning("*");

    // Insert into event_users if userID is provided
    if (userID) {
      await trx("event_users").insert({
        user_id: userID,
        event_id: newEvent.id,
      });
    }

    // Commit the transaction
    await trx.commit();

    // Send response
    res.status(201).json(newEvent);
  } catch (error) {
    // Rollback the transaction in case of error
    await trx.rollback();
    console.error(error);
    res.status(500).json({ error: "Failed to create event" });
  }
}

async function checkIfVenueExists(venueName: string) {
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

async function checkIfArtistExists(artistName: string, trx: any) {
  try {
    const formattedArtistName = artistName.trim().toLowerCase();
    const exists = await knex("artists").where("name", formattedArtistName).first();
    if (exists) {
      console.log("Artist already exists");
      return exists.id;
    }
    const [newArtist] = await trx("artists")
      .insert({ name: formattedArtistName })
      .returning("id");
    console.log(newArtist);
    return newArtist.id;
  } catch (error) {
    console.log(error);
  }
}


async function checkIfTourExists(tourName: string) {
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