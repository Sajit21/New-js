let btn=document.querySelector(".btn1");
btn.ondblclick=()=>{
    console.log("clicked me gotya")
};

let btn2=document.querySelector(".btn1");
// btn2.onmouseover=()=>{
//     console.log("clicked me gotya")
// };

//add and  remove an event listener
const handler1=()=>{
    console.log("this is handler 1")
}

 btn2.addEventListener("click",handler1) //case sensitive cha hai 

 const handler2=()=>{
    console.log("this is handler 2")
}

 btn2.addEventListener("click",handler2)
 const handler3=()=>{
    console.log("this is handler 3 ")
}

 btn2.addEventListener("click",handler3)

 //incase of remove 
 btn2.removeEventListener("click",handler1)



 //use of toggle and change tha background color
 let but=document.querySelector(".switch");
 let Mode="light";

//  but.addEventListener("click",()=>{
//     console.log("light change bhayo bhayo");
//  })
but.addEventListener("click",()=>{
    if(Mode=== "light")
    {
        Mode="dark"
        document.querySelector("body").style.backgroundColor="black";

    }
    else{
        Mode="light"
        document.querySelector("body").style.backgroundColor="white";


    }
    console.log("Mode")
    
 })