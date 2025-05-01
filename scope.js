//Global Varriable

let globalVariable = "i am global variable"

function showVariable() {
    console.log(globalVariable)
}

showVariable();

console.log(globalVariable);


//local varriable


function showVariable() {
    let localVarriable = "i am local varriable";
    console.log(localVarriable);
}

showVariable();

//console.log(localVarriable); this code you can't use b/c its local varraiable you cant use the outside of the local


// Blog scope

{
    let showLocalVarriable = function() {
        let localVarriable = "i am local varriable";
        console.log(localVarriable);
    }
    showLocalVarriable();

    let myName = "omar";
    const year = 2005;

    console.log(myName)
    console.log(year)
}
