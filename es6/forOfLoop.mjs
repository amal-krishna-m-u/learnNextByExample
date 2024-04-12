// exploreAnimeWorld

function exploreAnimeWorld(paragraph, characters) {
  // This loop can be used with any iterable, just like exploring different worlds in anime

  console.log("Exploring the Anime World: \n");

  // Exploring the paragraph
  console.log("In the Paragraph: \n");
  for (const character of paragraph) {
    // Each character in the paragraph is like encountering a new character in an anime world
    console.log(character);
  }

  // Exploring the array of characters
  console.log("\n In the Array: \n");
  for (const character of characters) {
    // Each character in the array is like meeting a character in an anime adventure
    console.log(character);
  }
}

const paragraph = "Welcome to the Anime World!";
const characters = [
  "Naruto Uzumaki",
  "Monkey D. Luffy",
  "Goku",
  "Ichigo Kurosaki",
  "Eren Yeager",
];

exploreAnimeWorld(paragraph, characters);
