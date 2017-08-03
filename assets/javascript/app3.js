/* Third attempt
*/
var intervalId;

var number = 30;

var count = 0;

var questionArray = ["Who is the only Cleveland Cavalier to win an MVP award while on the Cavs?", "If you can read this the setTimeout is not working", "test2"];

var answerGif = ["test","src='assets/images/lebronJames.gif'"]

var buttonArray = ["<button data-correct='yes'> Lebron James</button>", "<button data-correct='no'>Austin Carr</button>","<button data-correct='no'>James Worthy</button>","<button data-correct='no'>Mark Price</button>", "<button data-correct='yes'> Test1</button>", "<button data-correct='no'>Test2</button>","<button data-correct='no'>Test 3</button>","<button data-correct='no'>Test 4</button>"]

var correctAnswer = ["test" ,"Lebron James"]

var triviaContent = $("#triviaContent")

function run() {
	questionGen();
	intervalId = setInterval(decrement, 1000)
	function decrement() {
		number = number - 1;
		$("#timer").html("<p>Time Remaining: " + number + " seconds</p>")
		if (number === 25) {
			removeQuestion();
			incorrectAnswer();
			setTimeout(removeAnswer, 3000);
			setTimeout(questionGen, 3000);
			number = 33;
			console.log(count)
		} else {

		}

	}
}	
function questionGen () {
	var questionDiv = $("<div class='questionClass'>"+ questionArray[count] +"</div>")
	triviaContent.append(questionDiv);
	for (var i = 0; i < 4; i += 1) {
	var buttonDiv = $(buttonArray[i]);
	buttonDiv.addClass("buttonClass")
	triviaContent.append(buttonDiv);
	}
	for (var i = 0; i < 4; i += 1) {
	buttonArray.shift()
	}

	count = count + 1;
}	

function incorrectAnswer() {
	var correctAnswerDiv = $("<div class='questionClass'>" + correctAnswer[count] + " is the correct answer.</div>")
	triviaContent.append(correctAnswerDiv);
	console.log(correctAnswerDiv);
	var answerImage = $("<img " + answerGif[count] + "</img>");
	triviaContent.append(answerImage);
}

function removeQuestion() {
	$(".buttonClass").remove();
	$(".questionClass").remove();
}

function removeAnswer() {
	$(".questionClass").remove();
	$("img").remove();
}

function stop() {
	clearInterval(intervalId)
}
function start() {
	intervalId = setInterval(decrement, 1000);
}

$("#start").click(function(){
	$("#start").remove();
	run();
})
