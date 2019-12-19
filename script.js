var num1;
var num2;
var guess;
var answer;
var response;
var correct;
var incorrect;
var nC = 0;
var nI = 0;

$(document).ready(new function() {
    num1 = document.getElementById("num1");
    num2 = document.getElementById("num2");
    guess = document.getElementById("inputfield");
    response = document.getElementById("response");
    correct = document.getElementById("correct");
    incorrect = document.getElementById("incorrect");

    $("#inputfield").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#submitbutton").click();
        }
    });

    $("#submitbutton").click(function() {
        checkAnswer();
        clearInput();
    });

    setNumbers();
});

function setNumbers() {
    num1.innerHTML = Math.floor(Math.random() * 10) + 1;
    num2.innerHTML = Math.floor(Math.random() * 10) + 1;
    correct.innerHTML = nC;
    incorrect.innerHTML = nI;
}

function setIncorrect() {
    incorrect.innerHTML = nI;
}

function clearInput() {
    onclick.innerHTML = document.getElementById('inputfield').value = '';
}

function checkAnswer() {
    var n1 = parseInt(num1.innerHTML);
    var n2 = parseInt(num2.innerHTML);
    answer = n1 * n2;
    nC = parseInt(correct.innerHTML);
    nI = parseInt(incorrect.innerHTML);

    if (parseInt(guess.value) == answer) {
        response.innerHTML = "CORRECT!";
        nC = nC + 1;
        setNumbers();
    } 
    else {
        response.innerHTML = "INCORRECT!";
        nI = nI + 1;
        setIncorrect();
    }
}