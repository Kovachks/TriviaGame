/* 	create timer - Done
	remove start button on startup - Done
	create main game loop	
	Create on click event to start the game


*/

//------------------------------Variables-----------------------
var number = 30;

var intervalId;

var incorrect = 0;

var correct = 0;

var count = 0;

var images = ['assets/images/lebronJames.gif', "Test"];

var correctAnswer = ["Lebron James", "Test"];

var questionArray = ["Who is the only Cleveland Cavalier to win an MVP award while on the Cavs?", "test"];

//------------------------------Functions-------------------------
//runs decrement function once a second
function run() {
	intervalId = setInterval(decrement, 1000);
}

function stop () {
	clearInterval(intervalId)
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
		count += 1;
	}
}

function questionCall() {
	var newQuestionDiv = $("<div>"+questionArray[0]+"</div>");
	newQuestionDiv.addClass("questionClass");
	triviaContent.append(newQuestionDiv);
	}


function mainGame() {
	questionCall();
	run();
}













$("#start").click(function(){
	$("#start").remove();
	mainGame();
})