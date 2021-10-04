//getting all the hooks from html

var menu = document.getElementById("menu")
const inputNumber = document.getElementById("input");
const button = document.getElementById("resultBtn");
const resultBox = document.getElementById("resultBox");

//adding event so that with every input number I can check if that number length == BOID and 
//remove the disable feature from button

//everytime user will write a number and key will be released up then this function will be fired everytime
inputNumber.addEventListener("keyup", (e) => {

    let inputText = e.currentTarget.value;
    if (inputText.length === 16) {
        button.disabled = false;
        console.log("disabled is false");
        button.style.cssText = "color: white; cursor: pointer; background: #5e6ea7;";

    }
     else{
        button.disabled = true;
    }
});
//adding event in view Result to first check if the company is selected or not, then whether there is valid
//boid or not then finally display result depending on different scenario
//here I have supposed the share BOID for 1111111111111111
button.addEventListener("click", () => {
    var inputValue = inputNumber.value;
    if (menu.value === "") {
        resultBox.innerHTML = "Select you company!";
    }
    else if (inputValue == "") {
        resultBox.innerHTML = "Invalid BOID !";
    }
    else {
        if (inputValue == "1111111111111111"){
            if (menu.value) {
                alloted();
            }
            else {
                notAlloted();
            }
        }
        else {
            notAlloted();
        }
    }
});
//function to be called when alloted
var alloted = () => {
    resultBox.innerHTML = "Congratulation Alloted !!! Alloted quantiy: <br> 10";
    resultBox.style.color = "green";
}

//function to be called when not alloted
var notAlloted = () => {
    resultBox.innerHTML = "Sorry, not alloted for the entered BOID";
    resultBox.style.color = "#ff0000c9";
};