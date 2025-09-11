const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
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