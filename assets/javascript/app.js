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
		mainGame();
		$("#start").remove();
	})
})

//---------------------Variables------------------

var number = 30;

var intervalId;

var incorrect = 0;

var correct = 0;

var count = 0;

var questions = {
	question0: ["Who is the only Cleveland Cavalier to win an MVP award while on the Cavs?"],
	question1: [],
	question2: [],
	question3: [],
	question4: []
}

var answers = {
	answer0: ["Austin Carr", "Michael Jordan", "Mark Price"],
	answer1: [],
	answer2: [],
	answer3: [],
	answer4: [],				
}

var correctAnswer =	{
	answer0: ["Lebron James", "src='assets/images/lebronJames.gif'"]
}

var triviaContent = $("#triviaContent");

//---------------------functions------------------
//Main game function
function mainGame() {
	run();
	questionCall();
	answerCall();
}

function removeButton() {
	$(".incorrectClass").remove();
	$(".correctClass").remove();
}

//runs decrement function once a second
function run() {
	intervalId = setInterval(decrement, 1000);
}

function stop () {
	clearInterval(intervalId)
}

//Decrement function to decrease time
function decrement() {
	number = number -1;
	$("#timer").html("<p>Time Remaining: " + number + " seconds</p>");
	if (number === 0) {
		incorrect = incorrect + 1;
		number = 30;
	}
}

function questionCall() {
	var newQuestionDiv = $("<div>"+ questions.question0[0]+"</div>");
	newQuestionDiv.addClass("questionClass");
	triviaContent.append(newQuestionDiv);
}

function answerCall() {
	var correctAnswerButton = $("<button>" + correctAnswer.answer0[0] + "</button>");
	correctAnswerButton.addClass("correctClass");
	correctAnswerButton.val(true);
	triviaContent.append(correctAnswerButton);
	for (var i = 0; i < answers.answer0.length; i += 1) {
		var newAnswerButton = $("<button>"+ answers.answer0[i] +"</button>");
		newAnswerButton.addClass("incorrectClass");
		newAnswerButton.val(false)
		triviaContent.append(newAnswerButton);
	}
	$(".correctClass").on("click", function(){
		correct = correct + 1;
		removeButton();
		stop();
		setTimeout(2000)
		$(".questionClass").html("Correct!")
		var answerImage = $("<img " + correctAnswer.answer0[1] + "</img>")
		triviaContent.append(answerImage);
		count ++;
	})
	$(".incorrectClass").on("click", function(){
		incorrect = incorrect + 1;
		removeButton();
		stop();
		$(".questionClass").html("Inorrect")		
		var answerImage = $("<img " + correctAnswer.answer0[1] + "</img>")
		triviaContent.append(answerImage);
	})
}
