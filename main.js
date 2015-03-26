var indexView = new Array();
indexView.push(3);
var allQuestions = [{question: "Inside which HTML element do we put the JavaScript?",
					 choices: ["script>",
					 		   "js>",
					 		   "javascript>",
					 		    "scripting>"],
					  correctAnswer:0},
					 {question: "Where is the correct place to insert a JavaScript?",
					  choices: ["The <body> section",
					 		   "Both the <head> section and the <body> section are correct",
					 		   "The <body> section",
					 		    "Neither"],
					  correctAnswer:1},
					 {question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
					  choices: ["script name='xxx.js'>",
					 		    "script src='xxx.js'>",
					 		    "script href='xxx.js'>",
					 		    "script type='xxx.js'>"],
					  correctAnswer:1},
					 {question: "How do you write \"Hello World\" in an alert box?",
					  choices: ["msg(\"Hello World\");",
					 		    "alertBox(\"Hello World\");",
					 		    "msgBox(\"Hello World\");",
					 		    "alert(\"Hello World\");"],
					  correctAnswer:3},
					 {question: "How to write an IF statement in JavaScript?",
					  choices: ["if i == 5 then",
					 		    "if i = 5 then",
					 		    "if i = 5",
					 		    "if (i == 5)"],
					  correctAnswer:3},];

$(document).ready(function(){
	console.log('ready to go!');
	//randomQuestion();
	makeQuestions();

	$('#btn_next').click(function(){
		checkAnswer(index);
		makeQuestions();
	});

});

var makeQuestions = function(){
	index = randomQuestion();
	writeAnswer(index);
}

var checkAnswer = function(index){

	var checked  = $('input[name=answers]:checked').index('input[name=answers]');
	console.log(checked);
	console.log('correct answer: '+allQuestions[index].correctAnswer)

	if ( checked == allQuestions[index].correctAnswer){
		console.log('correct')
	}else{
		console.log('incorrect');
	}
	indexView.push(index);
	//console.log(checked.index());
};

var randomQuestion = function(){

	console.log('length question array:'+allQuestions.length)
	
	var number = 1 + Math.floor(Math.random() * allQuestions.length-1);
	console.log('NUMBER:'+number);
	console.log('CONTAINS'+ $.inArray( number, indexView ));

		if ( $.inArray( number, indexView ) != -1 ){
		console.log('calle');
		arguments.callee();
	}


	return number;
	//console.log(number);
};

//change to question
var writeAnswer = function(index){
	console.log('=>'+allQuestions[index].question);
	$('p').text(allQuestions[index].question);

//change for jquery
	//foreach radio buttons.
	var radios = document.getElementsByName('answers');
	for ( i = 0; i < radios.length; i++){
		console.log(allQuestions[index].choices[1])
		$('label[for=ans'+(i+1)+']').html(allQuestions[index].choices[i]);
		radios[i].value = allQuestions[index].choices[i];
	}
}