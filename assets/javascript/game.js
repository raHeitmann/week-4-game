$( document ).ready(function() {
    console.log( "ready!" );


//solely for rainbow text......



 $.fn.rainbowize = function() {
    return this.each(function() {
      var rainbowtext = '';
      var hue=0;
      var step=0;
 
      // get the current text inside element
      var text = $(this).text();
 
      // hue is 360 degrees
      if (text.length > 0)
        step = 360 / (text.length);
 
      // iterate the whole 360 degrees
      for (var i = 0; i < text.length; i++)
      {
        rainbowtext = rainbowtext + '<span style="color:' + color_from_hue(hue) + '">' + text.charAt(i) + '</span>';
        hue += step;
      }
 
      $(this).html(rainbowtext);
    });
  };












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

function check ()
{

		if (yourNum === winNum)
		{
			$('#added').html("You win!!!!");
			wins++;
			$('#wins').html('Wins: '+wins);

			yourNum = 0;
			$('#scoreNum').html('Your Number: '+yourNum);

			winNum = winningNumber();
			$("#targetNum").html('Winning Number: '+winNum);

			crystal1 = crystalNumbers();
			console.log(crystal1);
			crystal2 = crystalNumbers();
			console.log(crystal2);
			crystal3 = crystalNumbers();
			console.log(crystal3);
			crystal4 = crystalNumbers();
			console.log(crystal4);

		}

		if (yourNum > winNum)
		{
			$('#added').html("You lose...");
			losses++;
			$('#losses').html('Losses: '+losses);
			
			yourNum = 0;
			$('#scoreNum').html('Your Number: '+yourNum);

			winNum = winningNumber();
			$("#targetNum").html('Winning Number: '+winNum);

			crystal1 = crystalNumbers();
			console.log(crystal1);
			crystal2 = crystalNumbers();
			console.log(crystal2);
			crystal3 = crystalNumbers();
			console.log(crystal3);
			crystal4 = crystalNumbers();
			console.log(crystal4);

		}

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
	check();
  
});

$("#crystal2").click(function() {

	$("#added").html("you just added "+crystal2);
	yourNum = yourNum + crystal2;
	$('#scoreNum').html('Your Number: '+yourNum);
	check();
  
});

$("#crystal3").click(function() {

	$("#added").html("you just added "+crystal3);
	yourNum = yourNum + crystal3;
	$('#scoreNum').html('Your Number: '+yourNum);
	check();
  
});

$("#crystal4").click(function() {

	$("#added").html("you just added "+crystal4);
	yourNum = yourNum + crystal4;
	$('#scoreNum').html('Your Number: '+yourNum);
	check();
  
});







});