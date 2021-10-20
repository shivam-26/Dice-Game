var rannum1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice"+ rannum1 + ".png";

var randImagesSrc = "images/"+ randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randImagesSrc);

var rannum2 = Math.floor(Math.random() * 6)+1;

var randImageSrc2 = "images/dice"+rannum2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randImageSrc2);


if(rannum1 > rannum2)
{
    document.querySelector("h1").innerHTML=" 🚩 Player 1 wins!";
}
else if(rannum1 < rannum2)
{
    document.querySelector("h1").innerHTML="Player 2 wins 🚩!";

}
else{
    document.querySelector("h1").innerHTML="Draw!";
}