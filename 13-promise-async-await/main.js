const promiseOne =new Promise(function(resolve,reject){
    // Performing Async Task
    setTimeout(function(){
        console.log("Async Task is completed.")
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})


// Now, doing in Single Part
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2.")
        resolve()
    },2000)
})
.then(function(){
    console.log("Async 2 Resolved.")
})


// Passing Data to .then
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"Kushal", email:"kushal@mail.com"})
    },3000)
})
promiseThree.then(function(user){
    console.log(user);
})


// Passing data through chaining
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err=true;
        if(!err){
            resolve({username:"kushal", password:123})
        }else{
            reject("ERROR: Something went wrong")
        }
    },4000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("Promise is either Resolved or Rejected."))


// Using async await instead of .then
const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let err=true;
        if(!err){
            resolve({user:"admin", password:123})
        }else{
            reject("ERROR!!!")
        }
    },5000)
})
async function consumePromiseFive(){
    // async await cannot handle errors dirctly
    // const response = await promiseFive;
    // console.log(response);
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive();


// Fetching api with async await
async function gitUser(){
    try {
        const response = await fetch('htps://api.github.com/users/KushalxStha')
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("ERROR: Coudn't get data.")
    }
}
gitUser();


// Fetching api with .then .catch
fetch('https://api.github.com/users/KushalxStha')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(){
    console.log("Error while fetching data.")
})