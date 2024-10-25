//first insert the update
document.getElementById("one").innerHTML="ramlal";
//one ma bhakao content nai change gardincha display garda
let hari=document.getElementById("one").innerHTML;
console.log(hari)

//3div with common class name box
let hell=document.getElementsByClassName("box");
let idx=1;
for( let div of hell){
div.innerText=div.innerText + ` new content added to ${idx}`;
idx++;
}


//button create garera add garni 
//paila button create
let btn=document.createElement("button")
btn.innerText="click haan";
console.log(btn)

let but=document.getElementsByClassName("oho");
but[0].append(btn);


//create a newbutton element.give it a text "click me" with background color of red and text color of white 
//then insert the button as the first element inside the body tag

  let par=document.createElement("button")
  par.innerText="click me";
  par.style.backgroundColor="red";
  par.style.color="white"; //style content add in the js

  
  console.log(par)
//.button create bho


let yee=document.querySelector("body"); //body access gareko directly 
yee.prepend(par)






//use of the classlist incase we can add new class to the previous class without overriding
let para=document.getElementsByClassName("ptag");
console.log(para[0])


para[0].classList.add("pnew")  //classname access garda []kun child lai access garni denote garna parcha
//class dherai hunchan same name ko so

// console.dir(hell.innertext);
// hell.innertext=hell.innertext + `this is not a useful thing`
// console.log(hell.innertext)
