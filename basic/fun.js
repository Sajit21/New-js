 //sum the array values
 let a=[34,56,67,34,23,45]
 let total=0
 //use of for of loop
 for(let val of a){
    total=total+val;
    
 }
 let avg=total/a.length;
 console.log(`the average value of the array is ${avg}`);

 //change the value of array with 10% off on them
 let item=[250,645,300,900,50]
//  let newv=[]
//  for(let i of item){
//    let value=i*10/100;
//     i++;
//  }
//  console.log('the new item value is ${value}');

 let newval=0
 for(let i of item){
   //for(let i=0;i<item.length;i++)
 //normal display with index we have
   console.log(`value at index ${newval} is ${i}`);
   // let offer=i*(10/100);
   let offer=i/10;
   item[i]=item[i]-offer;
   console.log(`values after 10% off on them is ${item[i]}`)
   newval++;

}

//new
let items=[223,2323,244,442];
for(let i=0;i<items.length;i++)
{
   let offer=items[i]/10;
   items[i]-=offer;
}
console.log(items);

//arrow  function
let arrowf=(a,b)=>{
    let v=a*b;
    return v;

}

let p=arrowf(4,5);
console.log(p)