function destructure({ values, name, age }) {
  console.log(values, name, age);

  //direct initalization and destructuring
  const info = {
    firstName: "yourFirstName",
    secondName: "yourSecondName",
    lastName: "yourLastName",
  };

  const { firstName, secondName, lastName } = info;
  console.log("\n initialization \n" + firstName + secondName + lastName);

  // //alias ,this is also possible
  // const { firstName: fn, secondName: sn, lastName: ln } = info;
  // console.log("\n initialization \n" + fn + sn + ln);
}

const values = [1, 2, 3, 4];
const name = "yourName";
const age = 78;

const newObject = {
  values: values,
  name: name,
  age: age,
};
destructure(newObject);
