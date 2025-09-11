const parent = { email: "parent@mail.com" };
const child = Object.create(parent);

console.log(child.hasOwnProperty("email")); // false (because it's from parent)
console.log("email" in child);              // true  (because it's accessible via prototype)
