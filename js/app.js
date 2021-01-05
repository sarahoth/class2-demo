'use strict';

alert('Hi! Welcome to my page. I have a few questions for you to see how well you know me!');
var correctAnswers = 0;
var userName = prompt('First, what is your name?');
alert('Great to see you, ' + userName + '! Let\'s get started!');

function questionOne() {
  var anySiblings = prompt('Do I have any siblings? ').toLowerCase();

  if(anySiblings === 'y' || anySiblings === 'yes') {
    alert('You guessed it, ' + userName + '! I\'m the youngest of four kids!');
    correctAnswers++;
  } else if(anySiblings === 'n' || anySiblings === 'no') {
    alert('You got it all wrong, ' + userName +'!');
  } else {
    alert(userName+ '! This was a yes or no question. How did you mess that up?');
  }
  //console.log('Does the user think that I have any siblings: ' , anySiblings);
}

function questionTwo() {
  var anyPets = prompt('Do i have any pets?').toLowerCase();

  if(anyPets === 'y' || anyPets === 'yes') {
    alert('Correct, ' + userName + '! I have a cate named samra.');
    correctAnswers++;
  } else if(anyPets === 'n' || anyPets === 'no') {
    alert('Wrong, ' + userName + '! I have a cate named samra.');
  } else {
    alert('What?? Yes or no only, please, ' + userName + '!');
  }
  //console.log('Does the user think I have any pets: ' , anyPets);
}

function questionThree() {
  var livein = prompt('Do you think I am live in   jordan?').toLowerCase();
  if(livein === 'y' || livein === 'yes') {
    alert('Yep, ' + userName + '! jordan is my County, born and raised.');
    correctAnswers++;
  } else if(livein === 'n' ||livein === 'no') {
    alert('Wrong, ' + userName + '! I was born in jordan, WA!');
  } else {
    alert('Hmm, ' + userName + '. I think the answer you were looking for was, yes.');
  }
  //console.log('Does the User think that I am originally from jordan: ' , livein );
}

function questionFour() {
  var beentravel = prompt('Do you think I traveled befor??').toLowerCase();
  if(beentravel === 'y' || beentravel === 'yes') {
    alert('Nope, ' + userName + '. I hope to travel!');
  } else if(beentravel === 'n' || beentravel === 'no') {
    alert('Correct! Stuck on a ship waiting for this mommnt');
    correctAnswers++;
  } else {
    alert(userName + '?????');
  }
  //console.log('Does the user think I have been traveled: ' , beentravel);
}

function questionFive() {
  var playfootbal = prompt('Do you think that I play football?').toLowerCase();
  if(playfootbal === 'y' || playfootbal=== 'yes') {
    alert('You bet! You can\'t win if you don\'t play,' + userName + '.');
    correctAnswers++;
  } else if(playfootbal === 'n' || playfootbal === 'no') {
    alert('Wrong answer! I like to test my luck now and again,' + userName + '.');
  } else {
    alert('Ehhhh, no,' + userName + '.');
  }

  //console.log('Does the user think that I play the footbal: ' , playfootbal);
}





var correctNumbersisters = 14;
var totalGuessAttemptssisters = 0;
var maxGuessAttemptsisters = 4;



var userin ;
var count = 0;
function try1(){
  for(var i = 4; i>0;i--){
    userin = prompt('How many sisters do I have? you have : '+ i);
    userin = Number(userin);
    while(!(Number.isInteger(userin)) || userin == ""){
      userin = prompt('How many sisters do I have? you have : '+ i);
      userin = Number(userin);
    }
    if (userin == correctNumbersisters){
      count++;
      correctAnswers++;

      alert("OMG ITS RIGHT YOUR ARE COOOOOL");
      break;
    }else if (userin < correctNumbersisters){
      alert("too low");
    }else{
      alert("too high");
    }

  }
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
        correctAnswers++;
        break;
      }
    }
    if (correct){
      correctAnswers++;

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


//console.log(usersName + 'got ' + countTotalCorrect + ' correct');

    
askSingers();
console.log(correctAnswers)
alert('You got ' + correctAnswers + ' correct!!');


 questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
/*askSingers();
asksisters();
alert(' thanx ' + userName + ' you can now see some information about me'); */
     