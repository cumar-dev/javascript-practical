function fetchuserData() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            const success= true;
            // const success = false;
            if(success) {
                resolve({id:1, name:"john smith"});
            }else{
                reject("failed to fetch user data");
            }
        }, 3000);
    })
}

// call back

// console.log(fetchuserData()); this is will get the situation of promise

fetchuserData()
.then((data)=> console.log("fetch user,",data))

.catch((eror)=> console.log("error exist",eror))

//Async/Await

async function displayUserData() {
    try{
        const user = await fetchuserData();
         console.log(user);
    }catch(err) {
        console.log(err);
    }
}
displayUserData();

// console.log(fetchuserData); user oo kanaxsanaa


//then and catch is away you can behave the promize and also exist and other way is async ana a wait