const calculateSupply = (age, amount) => {
  const maxAge = 100;
  if (age < maxAge) {
    const amountperyear = amount / age;
    const output = (maxAge - age) * amountperyear;
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(
      `You will need ${output} to last you\nuntil the ripe old age of ${maxAge}`
    );
  } else {
    console.log("Wrong Input");
  }
};

calculateSupply(10, 40);
calculateSupply(30, 50);
calculateSupply(50, 60);
