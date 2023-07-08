console.log('***** Music Collection *****')

// Array for music collection
let collection = [];
// create function to accept title, artist, year as args
function addToCollection(title, artist, yearPublished) {
    console.log('In <addToCollection>');
    
    // create new object <album> to contain above paramaters
    // album will only be declared in the function itself 
    let album = {
        Title: title,
        Artist: artist,
        Year: yearPublished
    } 

    // push object to end of the <collection> array
    collection.push(album);

    // log title only to prevent clutter, at least see function is operating
    // comprehensive tests will get logged later
    console.log('New album is:', album.Title);

    // Return <album>, the object created will only be accessed through the array..
    // But it can be assigned to variable, console log, etc. when the function is called
    // e.g. let albumVariable = addToCollection('Starboy', 'The Weeknd', 2016);
    // this will run the function and assign the return to <albumVariable>
    return album;
}

// console log the first to make sure it's returning the album
console.log(addToCollection('I like it when you sleep, for you are so beautiful yet so unaware of it', 'the 1975', 2016));
addToCollection('Operation: Doomsday', 'MF DOOM', 2001);
addToCollection('Being Funny in a Foreign Language', 'the 1975', 2023);
addToCollection('1989', 'Taylor Swift', 2013);
addToCollection('Starboy', 'The Weeknd', 2016);
addToCollection('Illmatic', 'Nas', 1994);

// testing with no args
// console.log(addToCollection());
// testing with only one arg
// console.log(addToCollection('test'));

// objects just have undefined args for missing parameters
// a conditional for missing data could be used to prevent this

// check the array
console.log('Should have 6 items in <collection>', collection);
console.log(`<collection> array length is: ${collection.length}`,);


function showCollection(array) {
    console.log('In <showCollection>');

    console.log(`There are ${array.length} albums (should be 6 outside of testing)`);

    // for loop to log each album in the array
    // remember album is undeclared outside of this function too
    for (album of array) {
        console.log(`${album.Title} by ${album.Artist}, published in ${album.Year}`);
    } // end for
}

console.log('Should be seeing 6 albums')
showCollection(collection);

// Testing showCollection with result array from findByArtist
let test1 = findByArtist('Nas');
console.log('Testing artist in <collection>');
showCollection(test1);

console.log('Testing artist with multiple entries in <collection>');
let test2 = findByArtist('the 1975');
showCollection(test2);

console.log('Testing with no input parameters');
let test3 = findByArtist();
showCollection(test3);

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
        }  // end if
        
    } // end for

    // return array either way, if nothing found it will be empty
    return artistMatch;
} // end findByArtist

console.log('Testing Backstreet Boys: should return empty array');
console.log(findByArtist('Backstreet Boys'))

console.log('Testing the 1975: should have 2 albums');
console.log(findByArtist('the 1975'));
