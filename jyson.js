const user = {
    id: 1,
    name: "Alice",
    city: "wonderland"
};

console.log(user);

const jysonString = JSON.stringify(user);

console.log(jysonString);

const parseData = JSON.parse(jysonString);

console.log(parseData);

async function fetchData() {
    console.log("starting fetching Data");
    const response = await fetch('data.json');
    const data = await response.json();
    console.log("response ", data);
}
fetchData();



