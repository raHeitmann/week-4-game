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

function winningNumber () 

{
	var result = Math.floor(Math.random()*120 + 19);
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


winNum = winningNumber();
	$("#targetNum").html('Winning Number: '+winNum);



$("#crystal1").click(function() {

	$("#added").html("you just added "+crystal1);
	yourNum = yourNum + crystal1;
	$('#scoreNum').html('Your Number: '+yourNum);
  
});

$("#crystal2").click(function() {

	$("#added").html("you just added "+crystal2);
	yourNum = yourNum + crystal2;
	$('#scoreNum').html('Your Number: '+yourNum);
  
});

$("#crystal3").click(function() {

	$("#added").html("you just added "+crystal3);
	yourNum = yourNum + crystal3;
	$('#scoreNum').html('Your Number: '+yourNum);
  
});

$("#crystal4").click(function() {

	$("#added").html("you just added "+crystal4);
	yourNum = yourNum + crystal4;
	$('#scoreNum').html('Your Number: '+yourNum);
  
});



});