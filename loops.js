// for loop
// 1. meesha aa ka bilaabaysid  & intee ka bilaabaabaynaa
// 2. meesha aad usocotid & ilaa xagee soconaynaa   // ilaa intay gaaraynaa
// 3. see ku gaaraynaa  // yaa nagaynaa
// 1-5
for(let i = 0; i < 5; i++) {
   console.log(i)
}

// 1-10

for(let i = 1; i < 11; i++) {
console.log(i)
}


// meaning full examples usin arrays

const classStudents = ["Alice", "Bob", "charlie", "ali", "salma"];

for(i = 0; i < classStudents.length; i++) {
    console.log(classStudents[i])
}


//while loop

// let i = 10; micnaheed waa i woo ka weenyahay han nagu soo dhisin
let i = 0;
while(i < 5) {
console.log("iteration number" + i)
i++;
}

//Do while loop

let j = 0;
do {
    console.log("number :" + j);
    j++;
    // break;
} while (j < 6);


//main example

let passoward;
do {
    passoward = prompt("Enter your passoward");

}while(passoward !== "12345")

console.log("welcome User")



// for ...of loop

const NameStudent = ["cumar", "jaajaa", "cadnaan"]

for(let student of NameStudent) {
    console.log(student)
}

const language = "javascript";

for(let l of language) {
    console.log(l)
}

const PersonInfo = {
    name : "omar",
    country : "Somalia",
    contenant : "Africa",
    contNumber : 54
};

for(let p of Object.entries (PersonInfo)) {
    console.log(p[0] + ": " + p[1]); 
    // console.log(p[1]);
}
// this is as object

// for(let p of Object.entries (PersonInfo)) {
//     console.log(p);
    
// } this is as array


// for in loop 

const teacherID = {
    name : "hamuuda",
    id : "CA",
    age : 30
}

for(const key in teacherID) {
    // console.log(key) tells you name id age
    console.log(teacherID[key])
}

// const people = [
//     {
//     name : "Alice", 
//     age : 25, 
//     city : "wonderland"
// },
//     {
//         name : "Bob", 
//         age : 30, 
//         city : "Builderland"
//     },
//     {
//         name : "Charlie",
//          age : 35, 
//          city : "Choclate Factory"
//         }
// ];
// for(let p of Object.entries (people)) {
//     console.log(p[0] + ": " + p[1]);
// }