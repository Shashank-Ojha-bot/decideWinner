
alert("Decide among yourselves about who is going to be Player 1 or Player 2")
var name1=prompt("Name of Player 1");
var name2=prompt("Name of Player 2");

alert("Are you ready to reveal the result?");

var randomNumber1= Math.floor(Math.random() * 6) + 1;     //1-6

var randomNumber2= Math.floor(Math.random() * 6) + 1;

var randomDiceImage1="dice"  + randomNumber1 + ".png";     //dice1.png-dice6.png

var randomDiceImage2="dice"  + randomNumber2 + ".png";

var randomImageSource1="images/" + randomDiceImage1;    //images/dice1.png-images/dice6.png

var randomImageSource2="images/" + randomDiceImage2;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

var image2 =document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="&#x1F6A9"+name1+" wins";
}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML= name2+" wins &#x1F6A9";
}
else
document.querySelector("h1").innerHTML="It is a Draw";
