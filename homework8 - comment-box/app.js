// rating stars

var ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
    var starClassActive = "rating__star fas fa-star";
    var starClassInactive = "rating__star far fa-star";
    var starsLength = stars.length;
    var i;
    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);
            
            if (star.className===starClassInactive) {
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
            }
        };
    });
}
executeRating(ratingStars);

// create the variables 

var inputFullName = document.querySelector("#name");
var inputCountry = document.querySelector("#country");
var inputMessage = document.querySelector("#message");

// create the array for the messages:

function UserMessage(img, rating, fullName, country, message) {
    this.rating = rating;
    this.img = img;
    this.fullName = fullName;
    this.country = country;
    this.message = message;
    this.showInfo = function() {
        return "<img src='" + this.img + "'>" + "<br>" + this.rating + "<br>" + "<h5>" + this.fullName + "</h5>" + "<small>" + this.country + "</small>" + "<p>" + this.message + "</p>" + "<button class='remove-comment'>Remove Comment</button>";
    }
}

// create a main div for all the commments:

var allMsg = document.querySelector(".all-msg");
allMsg.innerHTM = "";

var userComment = document.createElement("div");
userComment.classList.add("user-comment");
allMsg.appendChild(userComment);

// call the function when the button is clicked:

var createCommentBtn = document.querySelector("button");
createCommentBtn.addEventListener("click", addComment);

// Go through the array to display the comments in the main div:

var messages = [];
var output = "";

function showInfo () {
    for(var i = 0; i < messages.length; i++) {  
        output +=  messages[i].showInfo() + "<br>";
    }
    userComment.innerHTML = output;
}

function addComment() {
    var message = new UserMessage ("https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128", ratingStars.value, inputFullName.value, inputCountry.value, inputMessage.value);
    messages.push(message);
    showInfo();
}

// remove current comment
    
var removeComm = document.createElement("button");
removeComm.classList.add("remove-comment");
removeComm.innerHTML = "Remove Comment";
removeComm.addEventListener("click", removeSingleComment);
function removeSingleComment() {
}

