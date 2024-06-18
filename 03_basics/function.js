function logInUserName(username){
    if (username===undefined) {
        console.log("please Enter a userName");
        return
    }
    return`${username} just logged in`
}

// logInUserName("Saurabh") //this will not print anything as we have not stated to print the value

// console.log(logInUserName());

//...............rest operator..............//

function addItemToCart(val1, val2, ...num){
    return  num
}

console.log(addItemToCart(200,300,400,800));