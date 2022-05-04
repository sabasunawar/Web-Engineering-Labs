function check(age) {
  console.log(`The Person with age ${age} can${age < 18 ? "'nt" : ""} Drive.`);
}

check(17);
check(18);
check(19);
