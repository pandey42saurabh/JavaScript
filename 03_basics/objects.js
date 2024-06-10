const mysym= Symbol("symb1")
const user ={
    name: "Saurabh",
    [mysym]: "mykey1",
    "full name" :"Saurabh Kumar Pandey",
    age: 24,
    location: "Noida",
    email: "saurabhpandey@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Wednsday"]
}

// console.log(user.age);
// console.log(user["full name"]);
user.email="skpanddey@gamil.com"
// Object.freeze(user)
user.email="skpandey@microsoft.com"
// console.log(user[mysym]);
// console.log(user);

user.greeting= function() {
    console.log("Hello Js User");
}

user.greetingTwo= function(){
    console.log(`Hello Js user ${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingTwo());

