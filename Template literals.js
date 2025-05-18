const name = "cumar";
const city = "wanlaweyn";

// const message = "Hello "+ name + " welcome " + city;

// console.log(message); this version of printing is old you can use template litrals

// Template literals

const oldMessage = `Hello ${name} welcome to the city ${city}`;

console.log(oldMessage);


function greet(name) {
return `hello, ${name}`;
// console.log("Hello", name);
}

function processorUserInput(callback) {
   const name = "Alice";
   return callback(name)
}

console.log(processorUserInput(greet));