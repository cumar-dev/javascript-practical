const person = {name : "omar", age : 20, city: "wanlaweyn"};

// const name = person.name;
/// this way is too old you have the next way
// const age = person.age;

const {name,age,city} = person;
console.log(person);
console.log(name);
console.log(age);
console.log(city);