function callNinja(calling = { ninja: "Naruto", jutsu: "shadowClone" }) {
  console.log(
    " calling.....",
    calling.ninja,
    "\n he is gonna use ",
    calling.jutsu,
  );
}

//passing parameter
callNinja({ ninja: "sasuke", jutsu: "chidori" });

//without passing parameters,invoking default parameter usage

callNinja();
