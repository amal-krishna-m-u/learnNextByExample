function show(name, address, mobile, age) {
  //previously in javascript
  //uncomment to see how it works
  // console.log(
  //   "Name: " +
  //     name +
  //     " \n Age:" +
  //     age +
  //     " \n Address: " +
  //     address +
  //     "\n mobile:" +
  //     mobile +
  //     "\n ",
  // );

  //after ES6

  console.log(`
    Name: ${name}
    Age: ${age}
    Address: ${address}
    Mobile: ${mobile}
    `);

  //lesser lines of code,higher readablity
}

show("YourName", "YourAddress", +910000000000, 89);
