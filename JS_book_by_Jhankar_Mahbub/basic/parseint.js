console.log(parseInt("-10")); // -10
console.log(parseInt("-10.33")); // -10
console.log(parseInt("10 6")); // 10
console.log(parseInt("10 years")); // 10
console.log(parseInt("years 10")); // NaN
console.log(parseInt("10.55taka")); // 10
console.log(parseInt("101", 2)); // 10

console.log(parseInt("0x11")); // 17
console.log(parseInt("ff", 16)); // 255
