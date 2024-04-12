// kamehameha.js

function unleashKamehameha(ingredients) {
  let kamehameha = [...ingredients];
  console.log("Unleashing Kamehameha!");
  console.log("Ingredients: ", kamehameha);
  kamehameha.push("Kamehameha Complete!!");
  console.log("Final Output: ", kamehameha);
}

const ingredients = ["ki", "power", "energy", "spirit"];

unleashKamehameha(ingredients);

// Confirming it creates a copy, not a reference
console.log("Original Ingredients: ", ingredients);
