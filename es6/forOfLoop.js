function forOfLoop(paragraph, array) {
  //this can be used with any iterables

  console.log("Object  \n");
  for (const values of paragraph) {
    //this is for paragraph
    console.table(values);
  }

  console.log("Array \n");
  for (const values of array) {
    //this is for array
    console.table(values);
  }
}

paragraph = "this is just a demo para";
array = [23, 34, 56, 67, 87];

forOfLoop(paragraph, array);
