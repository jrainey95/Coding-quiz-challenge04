var startBtn = document.getElementById('start');
var timerEl = document.getElementById('time');
var questionsEl = document.getElementById('questions');
var submitBtn = document.getElementById('submit');
var choicesEl = document.getElementById('choices');
var initialsEl = document.getElementById('initials');




var time = questions.length * 10;
var timerId;
var currentQuestionIndex = 0;

function startQuiz(){
  var startScreenEl = document.getElementById('start-screen');
  startScreenEl.setAttribute('class', 'hide');
  
  questionsEl.removeAttribute('class', 'hide');

  timerId = setInterval(clockTick, 1000);
  
  timerEl.textContent = time;
  
  getQuestion();
}

function getQuestion(){
  var currentQuestion = question[currentQuestionIndex];

  var titleEl = document.getElementById('question-title');
  titleEl.textContent = currentQuestion.title;

  choiceE.innerHTML = '';
   
  for (var i = 0; i < currentQuestion.choices.length; i++){
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textConent = i + 1 + '. ' + choices;

    choicesEl.appendChild(choiceNode);


  }
}


