// spread is used to spread or unwrap the contents of one element to another

function spreadTheButter(butter) {
  let bread = [...butter];
  console.log(bread);
  bread.push("spreading Completed!!");
  bread.reverse();
  bread.pop();
  console.log(bread);
}

const butter = ["this contains butter,spread it in a bread", "price is 500RS"];

spreadTheButter(butter);

//see it creates a copy ,not a refference
console.log(butter);
