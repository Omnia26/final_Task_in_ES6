
let $input1=document.querySelector("#value1");
let $input2=document.querySelector("#value2");
let $button1=document.querySelector("#button1");
let $button2=document.querySelector("#button2");
let $results = document.querySelector(".results");
let $msg = document.querySelector(".warn");

$button1.addEventListener("click",function(){
    if($input1.value=="" && $input2.value=="")
    warnMsg()
    else
    showdetails()
});
function warnMsg() {
    $msg.style.display= "block" ;
    $input1.style.border= "1px solid red"
    $input2.style.border= "1px solid red"
}
$input1.addEventListener("keypress" ,function() {
    $msg.style.display= "none" ;
    $input1.style.border= "1px solid #fff"
    $input2.style.border= "1px solid #fff"
})
function showdetails(){
    let newp1=document.createElement("p");
    let newp2=document.createElement("p");
    newp1.innerHTML=$input1.value;
    newp2.innerHTML=$input2.value;
    $results.appendChild(newp1);
    $results.appendChild(newp2);
}
export function forCountDown(){
$button2.addEventListener("click",function(){
    let x=setInterval(function(){
    let current=new Date().getTime();
    let restTime=new Date($input2.value).getTime()-current;
    let seconds = Math.floor((restTime % (1000 * 60)) / 1000);  
    let minutes = Math.floor((restTime % (1000 * 60 * 60)) / (1000 * 60)); 
    let hours = Math.floor((restTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    let days = Math.floor(restTime / (1000 * 60 * 60 * 24)); 

if(restTime>0){
console.log('please wait ... it is '+days+"d"+hours+"h"+minutes+"m"+seconds+"s"+' days remainning for your remainder');
document.querySelector(".results").innerHTML=days+"d"+hours+"h"+minutes+"m"+seconds+"s";
}
else if(restTime<0){
        clearInterval(x);
        document.querySelector(".results").innerHTML="Expired";
}
},1000)
});
}
