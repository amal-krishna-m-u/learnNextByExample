function guessTheNubmerOfArguments(...x) {
  //this is how you spread in the function definition
  console.log(x);
  console.log("number  of arguments", x.length); //this return an list

  // previously on js
  // console.log(arguments);
  // this returns and indexed arary
}

guessTheNubmerOfArguments(1, 2, 3, 4, 5, 6, 7);
