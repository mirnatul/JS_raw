const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullname() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullname());


/**
obj.key_name = ...;
obj[key-name] = ...;  // valid for -, space, @, starts with a number
obj[variable_name] = ...;
 */

/**
* set: obj.method_name = function () {};
* call: obj.method_name();
* get entire function: obj.method_name;
 */