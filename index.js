var play1=prompt("Enter the name of Player 1");
var play2=prompt("Enter the name of Player 2");

var play1e=play1.slice(0,1).toUpperCase();
var play1e2=play1.slice(1,play1.length)
 var firName=play1e+play1e2;

 
var play2e=play2.slice(0,1).toUpperCase();
var play2e2=play2.slice(1,play1.length)
 var secName=play2e+play2e2;
 

document.getElementById('play1').innerText=firName;
document.getElementById('play2').innerText=secName;


function rollDice(){
    var randomNunmber=Math.floor(Math.random()*6)+1;

var imageLink="dice"+randomNunmber+".png";

var exactPath="images/"+imageLink;

var tar1=document.getElementById('first');
tar1.setAttribute("src",exactPath);


var randomNunmber2=Math.floor(Math.random()*6)+1;

var imageLink2="dice"+randomNunmber2+".png";

var exactPath2="images/"+imageLink2;

var tar2=document.getElementById('second');
tar2.setAttribute("src",exactPath2);

if(randomNunmber>randomNunmber2){
    document.getElementById('result').innerText=firName+" wins";
}
else if(randomNunmber2>randomNunmber){
    document.getElementById('result').innerText=secName+" wins";
}
else{

    document.getElementById('result').innerText="Draw";
}
}