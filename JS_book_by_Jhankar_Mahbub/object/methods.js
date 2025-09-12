const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    age: 24,
    fullname() {
        return this.firstName + " " + this.lastName;
    }
};

const keys = Object.keys(person)
console.log(keys);

const values = Object.values(person)
console.log(values);

const entries = Object.entries(person)
console.log(entries);

Object.preventExtensions(person);
Object.freeze(person);
Object.seal(person);

const { age, ...rest } = person; // destructuring
console.log(rest); // object without age
