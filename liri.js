
require("dotenv").config();

var keys = require("./keys.js");

var action = process.argv[2];
var value = process.argv[3];

switch (action) {
    case "spotify-this-song":
    spotify();
    break;

    case "do-what-it-says":
    doIt();
    break;
}


function spotify () {
    var Spotify = require('node-spotify-api');
 
    var spotify = new Spotify(keys.spotify)
 
    spotify.search({ type: 'track', query: value, limit: 1 }, function(err, data) {
    // spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        
        // returning artist name
        console.log(data.tracks.items[0].artists[0].name);

        // returning song's name 
        console.log(data.tracks.items[0].name);
        
        // returning preview link of the song from Spotify
        console.log(data.tracks.items[0].preview_url);
        
        // returning album that the song is from
        console.log(data.tracks.items[0].album.name);        
        });

}

function doIt() {

    // fs is a core Node package for reading and writing files
    var fs = require("fs");

    // This block of code will read from the "movies.txt" file.
    // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
    // The code will store the contents of the reading inside the variable "data"
    fs.readFile("random.txt", "utf8", function(error, data) {

      // If the code experiences any errors it will log the error to the console.
      if (error) {
        return console.log(error);
      }

      // We will then print the contents of data
        //console.log(data);

      // Then split it by commas (to make it more readable)
      var dataArr = data.split(",");

      // We will then re-display the content as an array for later use.
      console.log(dataArr[0]);
      console.log(dataArr[1]);

    //   cannot get the values of dataArr to run in commandline
      var action = process.argv[2] = dataArr[0];
      var value = process.argv[3] = dataArr[1];

    });
}