/* Third attempt
*/
var intervalId;

var number = 30;

var count = 0;

var incorrectSelection = 0;

var correctSelection = 0;

var questionArray = ["Who is the only Cleveland Cavalier to win an MVP award while on the Cavs?", "Who has hit the most homeruns as a Cleveland Indian?", "Who is the leading rusher for the Cleveland Browns"];

var answerGif = ["test","src='assets/images/lebronJames.gif'", "src='assets/images/jimthome.gif'", "src='assets/images/jimBrown.gif'"]

 var buttonArray = ["<button data-correct='yes'> Lebron James</button>", "<button data-correct='no'>Austin Carr</button>","<button data-correct='no'>James Worthy</button>","<button data-correct='no'>Mark Price</button>",
 				   "<button data-correct='no'> Carlos Santana</button>", "<button data-correct='no'>Jackie Robinson</button>","<button data-correct='yes'>Jim Thome</button>","<button data-correct='no'>Kenny Lofton</button>",
 				   "<button data-correct='yes'>Jim Brown</button>","<button data-correct='no'>Peyton Hillis</button>","<button data-correct='no'>Leroy Kelly</button>","<button data-correct='no'>Earnest Byner</button>"]

var correctAnswer = ["test" ,"Lebron James", "Jim Thome", "Jim Brown"]

var triviaContent = $("#triviaContent");

function restart () {
	console.log("test")

	var intervalId;

	var number = 30;

	var count = 0;

	var incorrectSelection = 0;

	var correctSelection = 0;

	var questionArray = ["Who is the only Cleveland Cavalier to win an MVP award while on the Cavs?", "Who has hit the most homeruns as a Cleveland Indian?", "Who is the leading rusher for the Cleveland Browns"];

	var answerGif = ["test","src='assets/images/lebronJames.gif'", "src='assets/images/jimthome.gif'", "src='assets/images/jimBrown.gif'"]

	$(".questionClass").remove();

	$(".questionClass2").remove();

};

function run() {

	var userSelection;

	questionGen();
	intervalId = setInterval(decrement, 1000)
		function decrement() {
			$('.buttonClass').on('click', function(){
			userSelection = $(this).attr("data-correct");
			});
			number = number - 1;
			$("#timer").html("<p>Time Remaining: " + number + " seconds</p>")
					if (count === 4) {
						removeQuestion();
						removeAnswer();
						stop();
						displayScore();
					}
					else if (number === 0 || userSelection == 'no'){
						userSelection = '';
						incorrectSelection+=1;
						removeQuestion();
						answerObtained();
						setTimeout(removeAnswer, 3000);
						setTimeout(questionGen, 3000);
						number = 33;
					} else if (userSelection == 'yes'){
						userSelection = '';					
						correctSelection+=1;
						removeQuestion();
						answerObtained();
						setTimeout(removeAnswer, 3000);
						setTimeout(questionGen, 3000);
						number = 33;
					}	
			}
		}

function displayScore() {
	var correctDiv = $("<div class='questionClass'>You got "+ correctSelection+" questions correct!</div><br>")
	var incorrectDiv = $("<div class='questionClass2'>You got "+ incorrectSelection+" questions incorrect</div>")
	var restartButton = $("<button id='restart'>Restart the Game</button>")
	triviaContent.append(correctDiv);
	triviaContent.append(incorrectDiv);
	$("#restart").css("visibility", "visible");
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

function answerObtained() {
	var correctAnswerDiv = $("<div class='questionClass'>" + correctAnswer[count] + " is the correct answer.</div>")
	triviaContent.append(correctAnswerDiv);
	console.log(correctAnswerDiv);
	var answerImage = $("<img " + answerGif[count] + "></img>");
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
	$("#start").css("visibility", "hidden");
	run();
})

$("#restart").click(function(){
	$("#restart").remove();
	$("#start").css("visibility", "visible")
	restart();
})

$(document).on("click", ".buttonClass")