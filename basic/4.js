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

