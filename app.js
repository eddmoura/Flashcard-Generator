var fs = require('fs');
var inquirer = require('inquirer');
var basiccard = require('./BasicCard.js');
var flashcard = require('./flashcard.json')
var count = 0;
var score = 0;
var questions = [];

var question1 = new basiccard("What is the capital of Brasil", "Brazilia");
var question2 = new basiccard("What is the capital of US", "D.C");
var question3 = new basiccard("What is the capital of France", "Paris");

questions.push(question1);
questions.push(question2);
questions.push(question3);



var startFlashCard = function(){
if(count < 3){
inquirer.prompt([
{
  type: "input",
  message: questions[count].front,
  name: "question1"
 // flashcard.questions.back
}
  ])
.then(function(response){

var answer = response.question1.toLowerCase();
if(answer == questions[count].back.toLowerCase()){
  console.log(answer + " is correct!!" );
  score++
}
else{
  console.log(answer + " is wrong the right answer is: " + questions[count].back);

}
count++
console.log("This is your score: " + score + ".")
startFlashCard();


});

}


};

startFlashCard();


