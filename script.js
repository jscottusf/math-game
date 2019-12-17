var num1;
var num2;
var guess;
var answer;
var response;

$(document).ready(new function() {
    num1 = document.getElementById("num1");
    num2 = document.getElementById("num2");
    guess = document.getElementById("inputfield");
    response = document.getElementById("response");

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
}

function clearInput() {
    onclick.innerHTML = document.getElementById('inputfield').value = '';
}

function checkAnswer() {
    var n1 = parseInt(num1.innerHTML);
    var n2 = parseInt(num2.innerHTML);
    answer = n1 * n2;

    if (parseInt(guess.value) == answer) {
        response.innerHTML = "CORRECT!";
        setNumbers();
    } else
        response.innerHTML = "INCORRECT!";
}