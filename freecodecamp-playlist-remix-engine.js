const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

// ----- PSEUDO CODE -----
// DECLARE a function called flattenPlaylists that accepts an array of playlists
// IF the input is not an array: return empty array
// DECLARE empty result array
//      LOOP through playlist object
//          LOOP through tracks
//          Declare new Object
//          COPY all track properties
//          ADD source property
//          PUSH into result
// RETURN result

function flattenPlaylists(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  let result = [];

  for (let playlistIndex = 0; playlistIndex < arr.length; playlistIndex++) {
    const playlist = arr[playlistIndex];
    for (let trackIndex = 0; trackIndex < playlist.length; trackIndex++) {
      const track = playlist[trackIndex];
      const newTrack = { ...track, source: [playlistIndex, trackIndex] };
      result.push(newTrack);
    }
  }
  return result;
}

// ----- PSEUDO CODE -----
// Declare a function called scoreTracks
// Declare empty result array
//      LOOP through each track
//          CALCULATE score
//              votes * 10 - ABSOLUTE VALUE(bpm - 120)
//          DECLARE new track object
//          ADD score property
//          PUSH new track object into result
//      END LOOP
// RETURN result

function scoreTracks(tracks) {
  const result = [];

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];

    const score = track.votes * 10 - Math.abs(track.bpm - 120);
    const newTrack = { ...track, score };
    result.push(newTrack);
  }
  return result;
}

// ----- PSEUDO CODE -----
// Declare a function called dedupeTracks(tracks)
// Declare empty result array
// Declare empty collection of seenIds
//      LOOP through tracks
//          GET current track
//          IF trackId has not been seen
//              Add trackId to seen collection
//              Add track to result
//      END LOOP
// RETURN result

function dedupeTracks(tracks) {
  let result = [];
  const seenIds = [];

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    if (!seenIds.includes(track.trackId)) {
      seenIds.push(track.trackId);
      result.push(track);
    }
  }
  return result;
}

// ----- PSEUDO CODE -----
// DECLARE a function called enforceArtQuota(tracks)
// DECLARE empty result array
// DECLARE empty artist count object
//      LOOP through tracks
//          GET current track from dedupe function
//          GET artist name
//          IF artist does not exist in artist count object
//              SET artist count to 0
//          IF artist count is less than quota
//              ADD track to result
//              INCREMENT artist count
//      END LOOP
// RETURN result;

function enforceArtistQuota(tracks, quota) {
  let result = [];
  let artistCount = {};

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    const artist = track.artist;

    if (artistCount[artist] === undefined) {
      artistCount[artist] = 0;
    }

    if (artistCount[artist] < quota) {
      result.push(track);

      artistCount[artist] += 1;
    }
  }
  return result;
}

// ----- PSEUDO CODE -----
// DECLARE function called buildSchedule(tracks) --> return new Array
// DECLARE empty result Array
//      LOOP through tracks
//          GET current track
//          DECLARE schedule object
//          slot = current index + 1
//          trackId = current track's trackId
//          ADD schedule object to result
//      END LOOP
// RETURN result

function buildSchedule(tracks) {
  let result = [];

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    const schedule = {
      slot: i + 1,
      trackId: track.trackId,
    };
    result.push(schedule);
  }
  return result;
}

// ----- PSEUDO CODE -----
// DECLARE function called remixPlaylist(playlists, quota) --> return array of schedule
// FLATTEN the playlists
// SCORE the tracks
// REMOVE duplicate tracks
// ENFORCE the artist quota
// BUILD the schedule
// RETURN final schedule

function remixPlaylist(playlists, quota) {
  const flattened = flattenPlaylists(playlists);
  const scored = scoreTracks(flattened);
  const deduped = dedupeTracks(scored);
  const limited = enforceArtistQuota(deduped, quota);
  const schedule = buildSchedule(limited);

  return schedule;
}
