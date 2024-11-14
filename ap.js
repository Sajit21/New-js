// let  fact=()=>{
    console.log("format of api")
    let url="https://cat-fact.herokuapp.com/facts";
    let fact=document.querySelector(".acc");
let promise=async ()=>{  //making the arrow funtion in async format
    console.log("fetching the data")
    let getfact=await fetch(url)  //adding the await for any fetch
    console.log(getfact)
    let data=await getfact.json();
    console.log(data[0].text)
    console.log(data[0].status)
    fact.innerText=data[0].text //displaying the fetching api content to the web pagae
    
  
}

promise();






