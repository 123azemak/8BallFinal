document.addEventListener('DOMContentLoaded', () => {
document.getElementById("answer").style.display = "none";//formative wants answer hidden on page load
  // 1. create a variable called magic8Ball and set it equal to an empty object
var magic8Ball = {}; 
  // 2. set the line of code below equal to an array of 5 different answers
  magic8Ball.listOfAnswers =["For Sure","Not Today","No","I Don't Know","Ask Again"];

  // 3. hide the answer element

  magic8Ball.askQuestion = function(question) {
document.getElementById("answer").style.display = "none";
    // 4. trigger shake animation

document.getElementById("ball").classList.add("animate");//error at .classList, i have no idea why it breaks, and i cant skip it because the answer becomes visible by an animation

    // 5. change image to answer.png
document.getElementById("8ball").src="img/answer.png";
    // 6. fade in the answer
document.getElementById("answer").classList.add("animateFade");
    var randomNumber = Math.random();
    var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberForListOfAnswers);
    var answer = this.listOfAnswers[randomIndex];

    // 7. set the answer element's text to the answer variable
document.getElementById("answer").textContent = answer;
  };

  var onClick = function() {

    // 8. hide the answer element
document.getElementById("answer").style.display = "none";
    // 9. change the image back to question.png
document.getElementById("8ball").src="img/question.png";

    setTimeout(function(){
      var question = prompt("ASK A YES/NO QUESTION!");
      magic8Ball.askQuestion(question);
    }, 500);


  };

  // 10. add a click handler on the question button that calls the function onClick
// document.getElementById("questionButton").addEventListener("click", askQuestion);
  document.getElementById("questionButton").addEventListener("click", onClick);
});
