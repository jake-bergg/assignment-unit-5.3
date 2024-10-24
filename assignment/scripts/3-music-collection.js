console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  const newAlbum = {
    title: title, 
    artist: artist,
    yearPublished: yearPublished,
  }
  collection.push(newAlbum);
  return newAlbum;
};

console.log(addToCollection(myCollection, 'Igor', 'Tyler The Creator', 2019));
console.log(addToCollection(myCollection, 'Blonde', 'Frank Ocean', 2016));
console.log(addToCollection(myCollection, 'Damn', 'Kendrick Lamar', 2017));
console.log(addToCollection(myCollection, 'Flower Boy', 'Tyler The Creator', 2017));
console.log(addToCollection(myCollection, 'OK Computer', 'Radiohead', 1997));
console.log(addToCollection(myCollection, 'Circles', 'Mac Miller', 2020));

console.log(myCollection);

function showCollection(collection, ) {
  for (let index = 0; index < collection.length; index++) {
    const album = collection[index];
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}.`);
  }
};

console.log(showCollection(myCollection));










// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
