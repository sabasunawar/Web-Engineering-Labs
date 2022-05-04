const compf = (f1, f2) => (num) => f1(f2(num));

const myf1 = (num) => num + 15;
const myf2 = (num) => num + 20;

const ans = compf(myf1, myf2);

console.log(`Answer = ${ans(10)}`);
console.log(`Answer = ${ans(20)}`);
console.log(`Answer = ${ans(30)}`);
