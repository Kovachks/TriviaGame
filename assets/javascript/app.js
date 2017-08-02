/*
Create onload event for start button - Done
create onclick event for start button to start code - Done
create timer that counts down from 30 seconds - Done
write the timers current time left on the page and update every second - Done
Create question object
create function that loops through questions

*/

$(document).ready(function(){
	$("#start").on("click", function() {

		run();
		$("#start").remove();
		questionCall();
	})
})

//---------------------Variables------------------

var number = 30;

var intervalId;

var incorrect = 0;

var correct = 0;

var questions = {
	question1: ["Who is the only Cleveland Cavalier to win an MVP award while on the Cavs?"],
	question2: [],
	question3: [],
	question4: [],
	question5: []
}

var answers = {
	answer1: ["Lebron James", "Austin Carr", "Michael Jordan", "Mark Price"],
	answer2: [],
	answer3: [],
	answer4: [],
	answer5: [],				
}

var triviaContent = $("#triviaContent");

//---------------------functions------------------
//Main game function
function mainGame() {
	run();
	questionCall();

}


//runs decrement function once a second
function run() {
	intervalId = setInterval(decrement, 1000);
}

//Decrement function to decrease time
function decrement() {
	number = number -1;
	$("#timer").html("<p>Time Remaining: " + number + " seconds</p>");
	if (number === 0) {
		alert("Time has run out!")
		incorrect = incorrect + 1;
		number = 30;
	}
}

function questionCall() {
	var newQuestionDiv = $("<div>"+ questions.question1+"</div>");
	newQuestionDiv.addClass("questionClass")
	triviaContent.append(newQuestionDiv);
}