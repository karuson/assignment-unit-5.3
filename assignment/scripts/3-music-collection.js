console.log('***** Music Collection *****')

// Array for music collection
let collection = [];
// create function to accept title, artist, year as args
function addToCollection(title, artist, yearPublished) {
    console.log('In <addToCollection>');
    
    // create new object <album> to contain above paramaters 
    let album = {
        Title: title,
        Artist: artist,
        Year: yearPublished
    }
    // push object to end of the <collection> array, log to double check
    collection.push(album);
    console.log('New album is:', album.Title);
    return album;
}

// console log the first to make sure it's returning the album
console.log(addToCollection('I like it when you sleep, for you are so beautiful yet so unaware of it', 'the 1975', 2016));
addToCollection('Operation: Doomsday', 'MF DOOM', 2001);
addToCollection('Being Funny in a Foreign Language', 'the 1975', 2023);
addToCollection('1989', 'Taylor Swift', 2013);
addToCollection('Starboy', 'The Weeknd', 2016);
addToCollection('Illmatic', 'Nas', 1994);

// check the array
console.log('Should have 6 items in <collection>', collection);

function showCollection(array) {

    console.log(`There are ${array.length} albums`);
    for (album of array) {
        console.log(`${album.Title} by ${album.Artist}, published in ${album.Year}`);
    }
}
// Should log 6 albums
showCollection(collection);

// Testing showCollection with result array from findByArtist
let test1 = findByArtist('Nas');
showCollection(test1);

function findByArtist(artist) {
    console.log('In findByArtist function');

    // empty array to store search results
    let artistMatch = [];

    // loop through collection array for artist match
    for (album of collection) {
        
        // match artist to album.Artist and push to empty array
        if (album.Artist === artist) {
            artistMatch.push(album);
            console.log(`Match found! ${album.Title}`);
        } // end if
    } // end for
    return artistMatch;
} // end findByArtist

console.log('Testing Backstreet Boys: should return empty array');
console.log(findByArtist('Backstreet Boys'))

console.log('Testing the 1975: should have 2 albums');
console.log(findByArtist('the 1975'));
