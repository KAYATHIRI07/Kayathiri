function func(name,callback){
    console.log("Hi "+name);
   callback()
}
function greet(){
    console.log("From 2nd year ECE-B")
}
func("Kayu",greet)
function time(){
    setTimeout(()=>{
        console.log("From timeout")
},2000)
    console.log("Outside Timeout")
}
time()
const promise=new Promise((resolve,reject)=>{
    const api = true
    if (api) resolve("Successfully Fetched")
    else reject("Error while fetching")
})
promise
        .then((msg)=>console.log(msg)
)
.catch((error)=>console.log(error)
)
const fetchApi = new Promise((resolve,reject)=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {return response.json()})
        .then((data)=>resolve(data))
        .catch((error)=>reject(error.message))
})

fetchApi
        .then((msg)=>console.log("Data Fetched: ",msg))
        .catch((error)=>console.log(error))