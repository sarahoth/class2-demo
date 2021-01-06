'use strict';

var mark = 0;
var questions = ['Do I have any siblings? Y/N ','Do i have any pets?', 'Do you think I am live in  jordan?' ,'Do you think I traveled befor??','Do you think that I play football?'];
var correctAnswers =['y','y','y','y','y'];
var userAnswers = new Array();
var msgs=new Array();

function validationName(uinput,msg){
  while(uinput === '' || uinput === null || uinput === undefined){
      uinput = prompt(msg);
  }
  return uinput;      
}



alert('Hi! Welcome to my page. I have a few questions for you to see how well you know me!');
var userName = validationName(userName,'First, what is your name?')
alert('Great to see you, ' + userName + '! Let\'s get started!');


function validation(uinput, msg) {
  while (uinput === '' || uinput === null || uinput === undefined || !(uinput.toLowerCase() === 'y' || uinput.toLowerCase() === 'n')) {
      uinput = prompt(msg);
      if (!(uinput.toLowerCase() === 'y' || uinput.toLowerCase() === 'n' )) {
          alert("you can input Y / N or yes/no only ");
      }
  }
  return uinput;
}


for(var i=0 ;i<5;i++){

  userAnswers[i]=validation(userAnswers[i],questions[i]);
  if (userAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()) {
      mark++;
      msgs[i] = "correct";
      alert(" You guessed it, "+userName +" good job ! *_* ");
  
  }
  else {
      msgs[i]= "incorect";
      alert(" incorrect , don't worry! ");
  }
  console.log(questions[i], userAnswers[i], " it's " + msgs[i]);

}

var randomNumber = Math.floor(Math.random() * 100);
var totalGuessAttemptssisters = 0;
var maxGuessAttemptsisters = 4;


var userin ;

function try1(){
  for(var i = 4; i>0;i--){
    userin = prompt('enter a random number ? you have : '+ i+ "ireation ");
    userin = Number(userin);
    while(!(Number.isInteger(userin)) || userin == ""){
      userin = prompt('enter a random number? you have : '+ i);
      userin = Number(userin);
    }
    if (userin == randomNumber){
      
      mark++;

      alert("OMG ITS RIGHT YOUR ARE COOOOOL");
      break;
    }else if (userin < randomNumber){
      alert("too low");
    }else{
      alert("too high");
    }

  }
  alert ( " the number : " +randomNumber);
  
}

try1();


var correct = false;

var totalGuessAttemptsSingers = 0;
var likeSingers = [
  
  'SARAH',
  'Ed Sheeran',
  'Julia Michaels',
  'Drake'
];
// length = 7
//index 0-6
var maxGuessAttemptSingers = 6;
var userInputSingers ;
function askSingers () {
  for (var i = 0; i < maxGuessAttemptSingers; i++) {
    userInputSingers = prompt('Which singers do I like?');
    for (var j = 0; j < likeSingers.length; j++) {
      if (likeSingers[j].toLowerCase() === userInputSingers.toLowerCase()) {
        console.log(userName+ ' typed one of the singers I like');
        alert('Yipee! You\'re correct. My favorites are : ' + likeSingers.toString());
        correct = true;
        totalGuessAttemptsSingers++;
        mark++;
        break;
      }
    }
    if (correct){
      mark++;

      break;
    }
    if(maxGuessAttemptSingers === i + 1) {
      console.log(userName+' ran out of attempts for singers question');
      alert('Sorry, you ran out of attempts. My favorites are : ' + likeSingers.toString());
      correct = true;
    }
    else {userInputSingers = prompt('It\'s not correct. Try again!');
    }
  }
}

askSingers();
console.log(mark)
alert('You got ' + mark + ' correct!!');
