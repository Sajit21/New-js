// const val={
//     name: "sajit maharjan",
//     age: 18,
//     //two types of writing function here ie
//     fun1(){
//         console.log("this is funtion 1");
//     },

//     fun2: function(){
//         console.log("this is funtion 2");
//     }
// };


// //we will include same method here and object method will be used
// const val1={
//    ramlal: 5000,
//    fun1(){
//     console.log("this is funtion 5");
//       }
// }

// val1.__prototype__=val

// console.log(val1)


//use of constructor with inheritanace 
class person{
    constructor(brand){
        console.log("this is parent class")
        this.mero="mero";  //incase we pass argument
        this.brand=brand;  //we can pass the argument from the child constructor to the parent construtor
    }

    read(){
        console.log("this is read things")

    }

}

class doctor extends person{
    constructor(brand){
        console.log("this is child class")
        super(brand); //first calling the parent class else we get error
        
    }
sleep(){
    console.log("this is my sleeping time")
}    
}

let hami= new doctor("goldstar");
console.log(hami)




//fetching data only if the first data have been fetched
function newmew1(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("for new data")
        // if(datamew)
        // {
        //     datamew()
        // }
        resolve("some issuse in the process")
    },3000)
})
}

function newmew2(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("for new data2",)
        // if(datamew)
        // {
        //     datamew()
        // }
        resolve("some issuse in the process")
    },6000)
})
}


console.log("fetching the first data")
let part= newmew1()
part.then((rem)=>{
    console.log(rem)
    console.log("fetching the second data")
    let part2=newmew2()
    part2.then((res)=>{
        console.log(res)
    })
})


/ //storing 
// localStorage.setItem('name','ram') //store into local storage of window with key and value


// //to get from local storage
// let pam=localStorage.getItem('name')

// //to update
// localStorage.setItem('name','shyam') 

// //to 
// localStorage.removeItem('name') 

