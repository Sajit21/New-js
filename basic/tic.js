let bot1=document.querySelector(".bot");
let graph1=document.querySelector(".graph");
let boxes=document.querySelectorAll(".box"); //sabai box select garna selectorall use garni

let Wpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,3,6]
    ];
let turn0=true; //display O else X ie false


// suppose class ko naam box cha bhanai
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        // console.log("box has been clicked")
        if(turn0){
            box.innerText="o";
            turn0=false;
        }
        else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;

     checkwinner();
    })  
});

//pattern correct cha ki chaina check garni
let checkwinner=()=>{
for(let pattern of Wpattern){
//     console.log[boxes[pattern[0]] ,
//   boxes[pattern[1]],
//    boxes[pattern[2]] ];

    
    let pat1val=boxes[pattern[0]].innerText;  
    let pat2val=boxes[pattern[1]].innerText;
    let pat3val=boxes[pattern[2]].innerText;
    if(pat1val!="" && pat2val!="" && pat3val!="")
        if(pat1val===pat2val && pat2val===pat3val )
        {
            console.log("congrats you are the winner");
        }
        

}};