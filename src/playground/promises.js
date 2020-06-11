const promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve({
            name: 'Dhruv',
            age: 21
        });
        reject("Something went wrong");
    }, 5000)
});

console.log("Before");

//promise only runs when the promise is resolved
//most of the time we're going to attach handlers for the promise
//and the promise is generated through a library 
promise.then((data) =>{
    console.log(1, data);
    return "some data";
}).then((str) =>{
    console.log("Does this run?", str);
}).catch((error) =>{
    console.log("error: ", error);
})

console.log("after");