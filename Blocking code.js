/// synchronous

function userfectchingdataSync () {
    alert("fetching user data");
    return {id: 1, name: "omar"};
}

console.log("starting fetching user data");

const user = userfectchingdataSync();

console.log("user data",user);

console.log("This message is blocked untill user data is fetched");


/// this is a blocking code






