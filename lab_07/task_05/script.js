const pos = (num) => num > 0;

const nums = [-1, -2, -3, 1, 2, 3];

console.log(`Original = ${nums}`);
console.log(`Filtered = ${nums.filter(pos)}`);
