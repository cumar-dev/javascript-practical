// Get data
async function fetchdata() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // console.log(response.status);

    if(!response.ok) {
        throw new error(`Http error exists, ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    }catch(error) {
        console.log("Error exists")
    }
    
}

fetchdata();

/// postdata

async function postData() {
try{
const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'what is the title of post',
        body: 'hearder is the body of this post',
        Userid: 1
    })
});
if(!response.ok) {
    throw new Error(`http error: ${response.status}`);
}

console.log("beforeData: ", response);

const data = await response.json();
console.log("Posted data: ", data);

}catch(error) {
    console.log("error exists ", error)
}
}

postData();






async function postData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Posted data:", data);
    } catch (error) {
        console.error("Error posting data:", error);
    }
}

postData();


//put data (update)

async function updateData() {
    try {
     const updateResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
         method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
         id: 1,
        title: 'foo',
        body: 'bar',
         userId: 1,
        })
     })
     if(!updateResponse.ok){
        throw new Error(`Http error exist ${updateResponse.status}`);
     }
     const dataUpdated = await updateResponse.json();
     console.log("this is your data updated", dataUpdated);
    }catch(error) {
        console.log(`the error updated ${error}`)
    }
}

updateData();


/// Deleted data
async function deletingData() {
    try{
     const deletedData = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'Delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
             id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
       
     })
      if(!deletedData.ok) {
        throw new Error(`Http error exist ${deletingData}`);
      }
      const removingData = await deletedData.json();
      console.log("successfully deleted", removingData);

    }catch(error) {
        console.log(`Error ${error}`);
    }
}

deletingData();