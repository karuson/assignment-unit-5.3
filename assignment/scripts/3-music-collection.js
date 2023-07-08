console.log('***** Music Collection *****')

let collection = [];


// create function to accept title, artist, year as args
function addToCollection(title, artist, yearPublished) {
// create new object <album> to contain above paramaters
let album = {
    title,
    artist,
    yearPublished 
};
// add created object to end of the <collection> array
collection.push(album);
// log last item pushed to the array to make sure it's what we want
console.log(collection[collection.length - 1]);
return album;
}
addToCollection('I like it when you sleep, for you are so beautiful yet so unaware of it', 'the 1975', 2016);
addToCollection('Operation: Doomsday', 'MF DOOM', 2001);
addToCollection('Only Built 4 Cuban Linx...', 'Raekwon', 1995);
addToCollection('1989', 'Taylor Swift', 2013);
addToCollection('Starboy', 'The Weeknd', 2016);
addToCollection('Illmatic', 'Nas', 1994);

console.log(collection);