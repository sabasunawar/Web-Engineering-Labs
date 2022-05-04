let nums = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
console.log(`Original = ${nums}`);
nums = nums.map((num) => Math.sqrt(num));
console.log(`After Square root = ${nums}`);
