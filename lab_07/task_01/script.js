const vol = (l) => (w) => (h) => l * w * h;

const l = parseInt(prompt("Enter length = "));
const w = parseInt(prompt("Enter width = "));
const h = parseInt(prompt("Enter height = "));

alert(`Vol. is ${vol(l)(w)(h)}`);
