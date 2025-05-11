exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('genre').del()
      .then(function () {
        // Inserts seed entries
        return knex('genre').insert([
          { name: 'Rock', description: 'A genre of popular music that originated as "rock and roll" in the United States in the early 1950s.' },
          { name: 'Pop', description: 'A genre of popular music that originated in its modern form during the mid-1950s in the United States and the United Kingdom.' },
          { name: 'Jazz', description: 'A music genre that originated in the African-American communities of New Orleans, United States.' },
          { name: 'Classical', description: 'A broad term that usually refers to music produced in, or rooted in the traditions of Western liturgical and secular music.' },
          { name: 'Electronic', description: 'Music that employs electronic musical instruments, digital instruments, or circuitry-based music technology.' },
          { name: 'Hip Hop', description: 'A music genre and cultural movement that emerged in the 1970s when DJs began experimenting with rhythmic beats in loops.' },
          { name: 'Indie', description: 'A genre of music that is often produced independently from commercial record labels or their subsidiaries.' },
          { name: 'Metal', description: 'A genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and the United States.' },
          { name: 'Country', description: 'A genre of popular music that originated with blues, old-time music, and various types of American folk music.' },
          { name: 'Folk', description: 'Traditional music that originated in the 19th century and is often contrasted with commercial and classical styles.' },
          { name: 'R&B', description: 'A music genre that combines elements of rhythm and blues, soul, funk, pop, hip hop, and dance.' },
          { name: 'Blues', description: 'A music genre and musical form which was originated in the Deep South of the United States around the 1870s.' },
          { name: 'Latin', description: 'A genre of music that comes from Spanish and Portuguese-speaking areas of Latin America, but can also refer to music from Spain, Portugal, and Brazil.' },
          { name: 'Reggae', description: 'A music genre that originated in Jamaica in the late 1960s, distinguished by a rhythmic emphasis on off-beat, and a slower tempo.' },
          { name: 'Soul', description: 'A popular music genre that originated in the African American community throughout the United States in the 1950s and early 1960s.' },
          { name: 'Punk', description: 'A music genre that developed in the mid-1970s, rooted in 1960s garage rock, and which rejects the excesses of mainstream 1970s rock.' },
          { name: 'Classical Crossover', description: 'A genre that bridges classical music with other genres, aiming to bring classical music to a wider audience.' },
          { name: 'K-Pop', description: 'A genre of popular music originating from South Korea that includes a wide variety of audiovisual elements.' },
        ]);
      });
  };