n=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+n+".png");
m=Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+m+".png");
if(n>m)
 document.querySelector("h1").innerHTML="player 1 won!";
else if(n<m)
 document.querySelector("h1").innerHTML="player 2 won!";
else
 document.querySelector("h1").innerHTML="Draw!";