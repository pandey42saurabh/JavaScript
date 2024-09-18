const promiseOne= new Promise(function(resolve, reject){
    setTimeout (function(){
        console.log("Async is completed");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 called");
        resolve()
    },1000)
    
}).then(function(){
    console.log("Async 2 resolved");

})

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Saurabh", Email:"saurabh@gmail.com"})
    },1000)
}).then(function(user){
    console.log(user);
  
})

const promiseFour= new Promise(function(resolve,reject){
    let error= false;
    if(!error){
        setTimeout(function(){
            resolve({username:"Saurabh",Email:"sk@pandey"})
        },1000)
    } else{
        reject("Something went wrong");
        
    }
    
});

promiseFour.then((user)=>{
    console.log(user);
    return user.username   
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("The promise is either Resolved or Rejected")
)

const promiseFive= new Promise(function(resolve,reject){
    let error= true;
    if(!error){
        setTimeout(function(){
            resolve({username:"Saurabh",Email:"sk@pandey"})
        },1000)
    } else{
        reject("JS went wrong");
        
    }
    
});

async function consumepromiseFive() {

    try{
        const response= await promiseFive;
        console.log(response);
        
    }catch(error){
        console.log(error);
        
    }
}

consumepromiseFive()
