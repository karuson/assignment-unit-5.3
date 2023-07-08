console.log('***** Music Collection *****')

// Array for music collection
let collection = [];
// create function to accept title, artist, year as args
function addToCollection(title, artist, yearPublished) {
    console.log('In function addToCollection');
    // create new object <album> to contain above paramaters 
    let album = {
        title,
        artist,
        yearPublished
    }
    // add created object to end of the <collection> array
    collection.push(album);    
    // console log to double check
    console.log('New album is:', album.title);
    return album;
}

addToCollection('I like it when you sleep, for you are so beautiful yet so unaware of it', 'the 1975', 2016);
addToCollection('Operation: Doomsday', 'MF DOOM', 2001);
addToCollection('Being Funny in a Foreign Language', 'the 1975', 2023);
addToCollection('1989', 'Taylor Swift', 2013);
addToCollection('Starboy', 'The Weeknd', 2016);
addToCollection('Illmatic', 'Nas', 1994);

console.log(collection);

function showCollection(array) {
    console.log('The array length is:', array.length);
    for (album of array) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
}

showCollection(collection);