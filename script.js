//initializing some values;
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

//find elements

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");
//create element p
const lostWonsMessage = document.createElement("p");


form.addEventListener("submit",function(event){
    event.preventDefault();
    attempts++;
    if(attempts==5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if(attempts < 6){
        let guessNumber = Number(guessingNumber.value); //convert number
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining Attemps: ${totalAttempts-attempts}`;
    }
    guessingNumber.value = ""; //iput box clear;
});
function checkResult(guessingNumber){
    console.log(guessingNumber);
    const randomNumber = getRandomNumber(5);
    if(guessingNumber== randomNumber){
        resultText.innerHTML = `You have Won`;
        totalWons ++;
    }
    else{
        resultText.innerHTML = `you have lost; rondom number was : ${randomNumber}`;
        totalLosts++;
    }
    lostWonsMessage.innerHTML = `Won: ${totalWons}, Lost: ${totalLosts}`;
    lostWonsMessage.classList.add("large-text");
    cardBody.appendChild(lostWonsMessage);
}
function getRandomNumber(limit){
   return Math.floor(Math.random() * limit) + 1;
}

