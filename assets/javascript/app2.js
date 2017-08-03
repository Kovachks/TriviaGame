/* 	create timer - Done
	remove start button on startup - Done
	create main game loop	
	Create on click event to start the game


*/

//------------------------------Variables-----------------------
var counter = 0;

var number = 30;

var intervalId;

var incorrect = 0;

var correct = 0;

var images = ['assets/images/lebronJames.gif', "Test"];

var options = {
	option0: ["<button class='correctClass'> Lebron James</button>", "<button class='incorrectClass'>Austin Carr</button>","<button class='incorrectClass'>James Worthy</button>","<button class='incorrectClass'>Mark Price</button>"],
	option1: ["<button class='incorrectClass'>Austin Carr</button>", "Test2"],
	option2: ["James Worthy", "Test3"],
	option3: ["Mark Price", "Test4"]
}

var	correctAnswers = ["Lebron James", "test"]


var questionArray = ["Who is the only Cleveland Cavalier to win an MVP award while on the Cavs?", "test"];

var triviaContent = $("#triviaContent");

//------------------------------Functions-------------------------
//runs decrement function once a second
function run() {
	intervalId = setInterval(decrement, 1000);
	questionCall();
	answerCall();

}

function correctResponse () {
	clearInterval(intervalId)
	$(".correctClass").remove();
	$(".incorrectClass").remove();
	$(".questionClass").remove();
	var newQuestionDiv = $("<div class='questionClass'>" + correctAnswers[count] + " is the correct answer!</div>")
	triviaContent.append(newQuestionDiv);
	mainGame();

}
function answer () {

}

//Decrement function to decrease time
function decrement() {
	number = number -1;
	$("#timer").html("<p>Time Remaining: " + number + " seconds</p>");
	if (number === 0) {
		incorrect = incorrect + 1;
		stop();
		number = 30;
		run();
	}
}

function questionCall() {
	var newQuestionDiv = $("<div class='questionClass'>"+questionArray[count]+"</div>");
	triviaContent.append(newQuestionDiv);
	}

function answerCall() {
	for (var i = 0; i < 4; i += 1) {
	var correctAnswerButton = $(options.option0[i]);
	triviaContent.append(correctAnswerButton);
	}
	counter = counter + 1;
}

$("#start").click(function(){
	$("#start").remove();
	run();
})