// unleashZanpakuto

function unleashZanpakuto({ name, releaseCommand, abilities }) {
  console.log("Zanpakuto Details:");
  console.log("Name:", name);
  console.log("Release Command:", releaseCommand);
  console.log("Abilities:", abilities.join(", "));

  // Direct initialization and destructuring
  const zanpakuto = {
    shikai: "Senbonzakura",
    bankai: "Senbonzakura Kageyoshi",
    ability: "Cherry Blossom Control",
  };

  const { shikai, bankai, ability } = zanpakuto;
  console.log("\nZanpakuto Initialization:");
  console.log("Shikai:", shikai);
  console.log("Bankai:", bankai);
  console.log("Ability:", ability);
}

const zanpakutoInfo = {
  name: "Zangetsu",
  releaseCommand: "Bankai",
  abilities: ["Getsuga Tensho", "Zangetsu: Zanpakuto Spirit"],
};

unleashZanpakuto(zanpakutoInfo);
