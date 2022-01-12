// create the variables 

var inputFullName = document.querySelector("#name");
var inputCountry = document.querySelector("#country");
var inputMessage = document.querySelector("#message");

// create the array for the messages:

function UserMessage(img, fullName, country, message) {
    this.img = img;
    this.fullName = fullName;
    this.country = country;
    this.message = message;
    this.showInfo = function() {
        return "<div class='user-comment'><img src='" + this.img + "'>" + "<br>" + "<h5>" + this.fullName + "</h5>" + "<small>" + this.country + "</small>" + "<p>" + this.message + "</p>" + "<button class='remove-comment'>Remove Comment</button></div>";
    }
}

// create a main div for all the commments:

var allMsg = document.querySelector(".all-msg");
allMsg.innerHTM = "";

allMsg.addEventListener('click', removeComment);

// call the function when the button is clicked:

var createCommentBtn = document.querySelector("button");
createCommentBtn.addEventListener("click", addComment);

// Go through the array to display the comments in the main div:

var messages = [];
var output = "";

function showInfo () {
    output += messages[messages.length - 1].showInfo() + "<br>";
    allMsg.innerHTML = output;
}

function clearFields() {
    inputFullName.value = '';
    inputCountry.value = '';
    inputMessage.value = '';
}

function addComment(e) { 
    var errorMessage = document.createElement("p");
    errorMessage.classList.add("error");
    var msgBox = document.querySelector(".msg-box");
    errorMessage.innerHTML = "";
    msgBox.appendChild(errorMessage);
    if (inputFullName.value == "" || inputFullName.value == null || inputCountry.value == "" || inputCountry.value == null || inputMessage.value == "" || inputMessage.value == null) {
        errorMessage.innerHTML = "Please fill out all fields.";
    } else {
        e.preventDefault();
        errorMessage.html = "";
        var message = new UserMessage ("https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128", inputFullName.value, inputCountry.value, inputMessage.value);
        messages.push(message);
        showInfo();
        clearFields();
    }
}

// remove current comment

function removeComment(e) {
    if(e.target.classList.contains("remove-comment") == true) {
        console.log(e.target.parentNode)
        e.target.parentNode.remove();
    }
}