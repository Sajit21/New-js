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





// console.dir(hell.innertext);
// hell.innertext=hell.innertext + `this is not a useful thing`
// console.log(hell.innertext)