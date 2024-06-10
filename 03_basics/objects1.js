const tinderUser ={}

    tinderUser.Id ="113abs",
    tinderUser.Name= "aniket",
    tinderUser.isLoggedIn= true

    // console.log(tinderUser);

    const regularUser={
        email:"user@gmail.com",
        username:{
            userfullname:{
                firstName:"Saurabh",
                lastName:"Pandey"
            }
        }
    }

    // console.log(regularUser.username.userfullname.lastName);

    const obj1={1:"a",2:"b"}
    const obj2={3:"a",4:"b"}
    const obj3={5:"a",6:"b"}

    // const obj4= Object.assign({},obj1,obj2,obj3)
    const obj4= {...obj1,...obj2,...obj3}
    // console.log(obj4);

    // console.log(Object.keys(tinderUser));
    // console.log(Object.values(tinderUser));
    // console.log(Object.entries(tinderUser));

    const course ={
        courseName:"Js Tutorial",
        fee: 999,
        courseInstructor: "Saurabh"
    }

    const {courseInstructor: instructor}= course
    // console.log(courseInstructor);
    console.log(instructor);