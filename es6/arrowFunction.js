// transitionToArrow.js

// Traditional function
function summonDragon() {
  console.log("Summoning Dragon...");
}

// Arrow function
const summonPhoenix = () => {
  console.log("Summoning Phoenix...");
};

summonDragon(); // Summoning Dragon...
summonPhoenix(); // Summoning Phoenix...

// Arrow functions are especially useful in callback functions
// Old method
function performJutsu(callback) {
  console.log("Performing jutsu...");
  callback();
}

performJutsu(function () {
  console.log("Jutsu completed!");
});

// New method using arrow function
const performTechnique = (callback) => {
  console.log("Performing technique...");
  callback();
};

performTechnique(() => {
  console.log("Technique completed!");
});
