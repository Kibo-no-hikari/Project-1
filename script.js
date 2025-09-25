let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppwecase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbol");
let genBtn = document.getElementById("genBtn");


// Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click',()=>{
    passBox.value = generatePassword();
});

let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumberChars = "0123456789";
let allsymbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Function to generate password
function generatePassword(){
    let generatePassword="";
    let allChars = "";

    allChars


    //genPassword =upperChars.charAt(Math.floorloor( Math.random() *upperChars.length));
    return genPassword;
}



