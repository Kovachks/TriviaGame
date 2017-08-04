/* Third attempt
*/
var intervalId;

var number = 30;

var count = 0;

var incorrectSelection = 0;

var correctSelection = 0;

var questionArray = ["Who is the only Cleveland Cavalier to win an MVP award while on the Cavs?", "Who has hit the most homeruns as a Cleveland Indian?", "Who is the leading rusher for the Cleveland Browns>"];

var answerGif = ["test","src='assets/images/lebronJames.gif'", "src='assets/images/jimthome.gif'"]

var buttonArray = [];

// var buttonArray = ["<button data-correct='yes'> Lebron James</button>", "<button data-correct='no'>Austin Carr</button>","<button data-correct='no'>James Worthy</button>","<button data-correct='no'>Mark Price</button>",
// 				   "<button data-correct='no'> Carlos Santana</button>", "<button data-correct='no'>Jackie Robinson</button>","<button data-correct='yes'>Jim Thome</button>","<button data-correct='no'>Kenny Lofton</button>",
// 				   "<button data-correct='yes'>Jim Brown</button>","<button data-correct='no'>Peyton Hillis</button>","<button data-correct='no'>Leroy Kelly</button>","<button data-correct='no'>Earnest <Byner></Byner></button>"]

var correctAnswer = ["test" ,"Lebron James", "Jim Thome", "Jim Brown"]

var triviaContent = $("#triviaContent");


function answer() {
	var buttonClick = $(this).attr("data-correct")
}


function run() {
	
	var userSelection;


	questionGen();
	$('.buttonClass').on('click', function(){
		userSelection = $(this).attr("data-correct");
	});

	console.log('user selection is: ', userSelection);
	intervalId = setInterval(decrement, 1000)
	function decrement() {
		number = number - 1;
		$("#timer").html("<p>Time Remaining: " + number + " seconds</p>")
			if(buttonArray.length){
				if (number === 25 || userSelection == 'no'){
					userSelection = '';
					incorrectSelection+=1;
					// you got it wrong
					console.log(userSelection);
					removeQuestion();
					answerObtained();
					setTimeout(removeAnswer, 3000);
					setTimeout(questionGen, 3000);
					number = 33;
					console.log(count);
				} else if (userSelection == 'yes'){
					correctSelection+=1;
					removeQuestion();
					answerObtained();
					setTimeout(removeAnswer, 3000);
					setTimeout(questionGen, 3000);
					number = 33;
				}	else {
					console.log('coding is fun');
				}
			} else {
				removeQuestion();
				removeAnswer();
				triviaContent.append("<div><p>You got " + correctSelection + " correct</p></div>");
				triviaContent.append("<div><p>You got " + incorrectSelection + " incorrect</p></div>");
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
	$("#start").remove();
	run();
})

$(document).on("click", ".buttonClass", answer)