
// setTimeout

setTimeout (()=> {
    console.log("After 3 seconds excute this code");
},3000)


//asynchronous


function getuserdata(callback) {
    setTimeout(()=> {
        const user = {id: 1, name: "omar"}
        callback(user);
    }, 3000)
    
}

console.log("starting to fetch user data");

getuserdata(function (user) {
    console.log(user);
})
    
