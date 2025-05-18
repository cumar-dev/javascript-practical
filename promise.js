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

// console.log(fetchuserData); user oo kanaxsanaa


