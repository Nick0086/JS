var uppercase = document.getElementById("uppercase");
var lowercase = document.getElementById("lowercase");
var numbers = document.getElementById("numbers");
var special = document.getElementById("symbols");
var passlength = document.getElementById("passwordlength");
var lengthDisplay = document.getElementById("pass");
var indicator = document.getElementById('strength');
var allCheckBox = document.querySelectorAll("input[type=checkbox]");


var passwordLength = 10;

handleSlider()
setIndicator("#ccc"); 

 
function handleSlider() {
    passlength.value = passwordLength;
    lengthDisplay.innerHTML = passwordLength;
    // const min = inputSlider.min;
    // const max = inputSlider.max;
    // inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"
}


passlength.addEventListener('input', function (e) {
    passwordLength = e.target.value;
    handleSlider();
})

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercase.checked) hasUpper = true;
    if (lowercase.checked) hasLower = true;
    if (numbers.checked) hasNum = true;
    if (special.checked) hasSym = true;

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if (
        (hasLower || hasUpper) &&
        (hasNum || hasSym) &&
        passwordLength >= 6
    ) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}


function generatePassword() {



    var charset = "";


    if (uppercase.checked) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase.checked) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers.checked) {
        charset += "0123456789";
    }
    if (special.checked) {
        charset += "!@#$%^&*()_+[]{}|;:,.<>?";
    }


    var password = "";
    for (var i = 0; i < passlength.value; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    if (uppercase.checked || lowercase.checked || numbers.checked || special.checked) {
        document.getElementById("password").value = password;
    }

    calcStrength();


}