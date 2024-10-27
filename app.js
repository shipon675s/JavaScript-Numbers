//! JavaScript Numbers:
const x = 25;
console.log(x);
console.log(typeof x);

//! string to number
const a = 0.6;
const b = 0.7;
const c = (a + b).toFixed(2); //! String Value
console.log((a + b).toFixed());
console.log(new Number(c));

const n = 100;
const m = 200;
const o = 300;
console.log(n + m + o);

//! Binary, Decimal, Octal, Hexadecimal
const aa = 30;
console.log(aa.toString(2));
console.log(aa.toString(10));
console.log(aa.toString(8));
console.log(aa.toString(16));

//! Number Propertice
let newNumber = Number.EPSILON;
newNumber = Number.MAX_VALUE;
newNumber = Number.MIN_VALUE;
newNumber = Number.POSITIVE_INFINITY;
newNumber = Number.NEGATIVE_INFINITY;
newNumber = Number.NaN;

console.log(newNumber);