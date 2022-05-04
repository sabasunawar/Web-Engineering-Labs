
const response = {
  data: {
    name: "Saba",
    occupation: null,
    lies: 0,
  },
};

console.log("==============================================");
let nam1 = response?.data?.name || "no name";
console.log(nam1);
let nam2 = response?.data?.name ?? "no name";
console.log(nam2);
console.log();
console.log();
let occupation1 = response?.data?.occupation || "no occupation";
console.log(occupation1);
let occupation2 = response?.data?.occupation ?? "no occupation";
console.log(occupation2);
console.log();
console.log();
let lies1 = response?.data?.lies || "no lies";
console.log(lies1);
let lies2 = response?.data?.lies ?? "no lies";
console.log(lies2);
console.log("==============================================");
