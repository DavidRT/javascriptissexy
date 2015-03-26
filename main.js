var indexView = new Array();
var totalScore = 0;

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
	console.log('ready to improve this!')
	//randomQuestion();
	makeQuestions();

	$('#btn_next').click(function(){
		checkAnswer(index);
		
		
	});

});

var makeQuestions = function(){
	index = randomQuestion();
	writeAnswer(index);
}

var displayScore = function(){
	$('#questions').empty();
	$('#questions').append('<p> Your score is:'+totalScore+'/'+allQuestions.length+' </p>')
};

var checkAnswer = function(index){

	var checked  = $('input[name=answers]:checked').index('input[name=answers]');
	

	if ( checked == allQuestions[index].correctAnswer){
		totalScore++;
		console.log('correct')
	}else{
		console.log('incorrect');
	}
	indexView.push(index);
	console.log('indexViewLength:'+indexView.length);
	console.log('allQuestionsLength:'+allQuestions.length);

	if (indexView.length == allQuestions.length){
		displayScore();		
	}else{
		makeQuestions();
	}
	//console.log(checked.index());
};

var randomQuestion = function(){

	
	
	var number = 1 + Math.floor(Math.random() * allQuestions.length-1);
	

		if ( $.inArray( number, indexView ) != -1 && indexView.length != allQuestions.length ){
		
		arguments.callee();
	}


	return number;
	//console.log(number);
};

//change to question
var writeAnswer = function(index){
	
	$('p').text(allQuestions[index].question);

//change for jquery
	//foreach radio buttons.
	var radios = document.getElementsByName('answers');
	for ( i = 0; i < radios.length; i++){

		$('label[for=ans'+(i+1)+']').html(allQuestions[index].choices[i]);
		radios[i].value = allQuestions[index].choices[i];
	}
}