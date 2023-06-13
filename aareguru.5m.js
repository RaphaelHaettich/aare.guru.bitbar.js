#!/usr/bin/env node

// Configuration
const schmerzgrenze = 19; // [°C], switches color of the display when reached
const city = "brugg"; // For a list of all possible cities look here: https://aareguru.existenz.ch/v2018/cities

// Internal configuration
const version = '1.1-js';
const app = 'aare.guru.bitbar';
const coldcolor = '#0000a0';
const warmcolor = '#009fb0';
const coldcolor_darkmode = '#d1d1e0';
const warmcolor_darkmode = '#00cc00';
const apiurl = `https://aareguru.existenz.ch/v2018/today?city=${city}&app=${app}&version=${version}`;

// Fetch data using fetch
fetch(apiurl)
  .then((response) => response.json())
  .then((data) => {
    if (!data) {
      console.log("?°");
      console.log("---");
      console.log("Tschuldigung.");
      console.log(`Keine Antwort vom Aare.guru. :-(|href=https://aare.guru/#${city}`);
      process.exit(1);
    }

    // Display data
    const temperature = data.aare;
    const text = data.text;
    const longname = data.longname;

    const ago = Math.floor(Date.now() / 1000) - data.time;
    let agostring = '';

    if (ago < 120) {
      agostring = `vor ${ago} Sekunden`;
    } else if (ago < (60 * 60)) {
      const minutes = Math.floor(ago / 60);
      agostring = `vor ${minutes} Minuten`;
    } else {
      agostring = "vor längerer Zeit";
    }

    // Determine color
    const darkmode = process.env.BitBarDarkMode;

    let color;
    if (temperature >= schmerzgrenze) {
      color = darkmode ? warmcolor_darkmode : warmcolor;
    } else {
      color = darkmode ? coldcolor_darkmode : coldcolor;
    }

    // Output
    console.log(`${temperature}°|color=${color}`);
    console.log("---");
    console.log(`Gemessen ${agostring} in ${longname}`);
    console.log(`${text}|href=https://aare.guru/#${city}`);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
