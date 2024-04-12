// summonNinja.js

function summonNinja({ ninja = "Naruto", jutsu = "Shadow Clone Jutsu" } = {}) {
  console.log("Summoning Ninja...");
  console.log("Summoned Ninja:", ninja);
  console.log("Technique to be used:", jutsu);
}

// Summoning a ninja with specified parameters
summonNinja({ ninja: "Sasuke", jutsu: "Chidori" });

// Summoning a ninja without specifying parameters (invoking default parameter usage)
summonNinja();

export default summonNinja;
