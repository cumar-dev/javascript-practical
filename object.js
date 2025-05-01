// console.log("object is here")
// Difference b/w array & object
//aray
// let fruits = ["apple", "mango", "panana", "watermealon"];
// console.log(fruits)


// let personInfo = ["name", "age", "city"];
// console.log(personInfo)

//object
let person = {
    name : "omar",
    age : 20,
    city : "wanlaweyn"

}
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.city)

//qaab array ahaan

console.log(person ["age"]);
console.log(person ["name"]);
console.log(person ["city"]);


let person1 = {
    name : "cade",
    year : 2000,
    city : "Daafeed"
}
// console.log(person1);

person1.year = 2005;

console.log(person1);

person1.village = "somtel";

console.log(person1);

person1.school = "ibnu-mubarak";

console.log(person1);

let fruits = {
    name : "mango",
    price : "$20",
    year : 2024,
    greet : () => {
        console.log("hello")
    },
    condition : function() {
       console.log("hello How are you", this.name)
    }
}
console.log(fruits);

console.log(fruits.greet());

fruits.condition();

// Array of objects


let TestStudents = ["hamuuda", "omar", "adnaan", "masut", "axmed"];

let students = [
    {
        name : "hamuuda",
        age : 30,
        class : "cm3d"
    },
    {
        name : "omar",
        age : 20,
        class : "cms4d"
    },
    {
        name : "adnaan",
        age : 23,
        class : "cms7d"
    }
]

console.log(TestStudents)

console.log(students)

console.log(students[0])
console.log(students[0].name)

console.log(students[1])
console.log(students[1].class)


// let j = 0;
// do {
//     console.log("number :" + j)
// } while (j < 6);

