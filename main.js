var indexView = new Array();
var totalScore = 0;

var allQuestions = [{question: "Inside which HTML element do we put the JavaScript?",
					 choices: ["script>",
					 		   "js>",
					 		   "javascript>",
					 		    "scripting>"],
					  correctAnswer:0,
					  answerChosen:undefined},
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
					  correctAnswer:1,
					answerChosen:undefined},
					 {question: "How do you write \"Hello World\" in an alert box?",
					  choices: ["msg(\"Hello World\");",
					 		    "alertBox(\"Hello World\");",
					 		    "msgBox(\"Hello World\");",
					 		    "alert(\"Hello World\");"],
					  correctAnswer:3,
					answerChosen:undefined},
					 {question: "How to write an IF statement in JavaScript?",
					  choices: ["if i == 5 then",
					 		    "if i = 5 then",
					 		    "if i = 5",
					 		    "if (i == 5)"],
					  correctAnswer:3,
					answerChosen:undefined},];


var questions = {
	dataQuestions : allQuestions,
	indexQuestion : 0,
	currentQuestion : allQuestions[0],
	totalCorrectly : 0,
	randomizeQuestions : function(){

	},
	checkQuestions : function(chosen){
		if ( chosen == this.dataQuestions[this.indexQuestion] ){
			totalCorrectly++;
		}
	},
	nextQuestion : function(){
		if ( this.indexQuestion < this.dataQuestions.length )
		this.indexQuestion++;
		console.log('next!');
		return this.indexQuestion;
	

	},
	prevQuestion : function(){
		if (this.indexQuestion != 0)
		this.indexQuestion--;
	},
	calculateScore : function(){

	}
} 

var init = function(index){
	var obj = questions.dataQuestions[index];

	$('p').text(obj.question);
	var radios = document.getElementsByName('answers');
	for ( i = 0; i < radios.length; i++){

		$('label[for=ans'+(i+1)+']').html(obj.choices[i]);
		radios[i].value = obj.choices[i];
	}
}


var testingObject = function(){
	init(0);

	questions.dataQuestions = allQuestions;
	console.log('index:'+questions.indexQuestion)
//	questions.nextQuestion();
//	questions.nextQuestion();


}

$(document).ready(function(){
	testingObject();

	/*console.log('ready to improve this!')
	//randomQuestion();
	makeQuestions();
*/
	
	$('#btn_next').click(function(){
		
		init(questions.nextQuestion());
		
		
	});

});

var validateInput = function(){

	var radioButtons = $("#main_form input:radio[name=answers]");
	var selectedIndex = radioButtons.index(radioButtons.filter(':checked'));
	if ( selectedIndex == -1){
		alert('you must selected one answer!')
		return;

	}
	return true;
};

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
	$('input[name=answers]:checked').prop('checked', false);

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