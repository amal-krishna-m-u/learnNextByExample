function destructure(arrayDetails) {
  const [name, address, salary] = arrayDetails;

  console.log(name, address, salary);
}

destructure(["YourName", "YourAddress", 35000]);
