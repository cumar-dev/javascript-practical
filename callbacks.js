/// callback function
function greet(name) {
    console.log(`hello ${name}`)
}

function processorinput(callback) {
    const name = prompt("please enter your name");
    console.log("welcome");
    callback(name);
}

processorinput(greet);

// more on callbacks

function operate(a,b, callback) {
    return callback(a,b);
}

function add(a,b) {
    return a+b;
}
console.log("Addition", operate(5,3, add))

function mul(a,b) {
    return a*b;
}
console.log("multiply",operate(5,3,mul))