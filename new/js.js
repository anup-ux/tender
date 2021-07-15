const button=document.getElementsByClassName("operation")
for(let i=0; i<button.length; i++){
const operations=button[i]
operations.addEventListener("click",()=>{
    const x=parseFloat(document.getElementById("first_number").value)
const y=parseFloat(document.getElementById("second_number").value)
let result=document.getElementById("result")
  if(operations.innerHTML=="-"){
      console.log(x)
      console.log(y);;
   const final_result=parseFloat(x-y);
   console.log("final_result",final_result);
   result.innerHTML= final_result
  }
else if(operations.innerHTML=="+"){
    result.innerHTML= x+y;
}
else if(operations.innerHTML=="*"){
    result.innerHTML= x*y;
}
else if(operations.innerHTML=="/"){
    result.innerHTML= x/y;
}
})
}
// PROBLEM NUMBER ******2
document.getElementById("second").addEventListener("click",()=>{
    const value=document.getElementById("odd").value
    for( let i=1;i<=value*2;i++){
    if(i%2!=0){
       console.log(i);
       alert(i)
    }
    }
})
// PROBLEM NUMBER 3***********************
const fun=(num)=>{
    console.log("number passed",num);
    let top="";
    let flag=true
    for(i=1;i<=num;i++){
    if(flag){
        console.log(top=top+i);
    }else{
        top=top+i
        console.log(top.split("").reverse().join());
    }
    flag=!flag
    }
    for(j=num-1;j>=0;j--){
      if(flag){
        top=top.slice(0,j)
        console.log(top);
      }else{
        top=top.slice(0,j) 
        console.log(top.split("").reverse().join());
      }
      flag=!flag
    }
}
document.getElementById("thirdbutton").addEventListener("click",()=>{
  const value= document.getElementById("third").value
  fun(value)
})
