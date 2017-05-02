$( document ).ready(function() {
    console.log( "ready!" );



var wins = 0;
var losses = 0; 

var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

var winNum = 0;
var yourNum = 0;


function crystalNumbers () 

{
	var result = Math.floor(Math.random()*12 + 1);
	return result;

}


crystal1 = crystalNumbers();
	console.log(crystal1);
crystal2 = crystalNumbers();
	console.log(crystal2);
crystal3 = crystalNumbers();
	console.log(crystal3);
crystal4 = crystalNumbers();
	console.log(crystal4);



$("#crystal1").click(function() {

	console.log("you just added "+crystal1);
  
});

$("#crystal2").click(function() {

	console.log("you just added "+crystal2);
  
});

$("#crystal3").click(function() {

	console.log("you just added "+crystal3);
  
});

$("#crystal4").click(function() {

	console.log("you just added "+crystal4);
  
});



});