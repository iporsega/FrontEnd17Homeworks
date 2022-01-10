// rating stars

// var ratingStars = document.querySelector("#rating__star");

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
var img = "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"; 

// create a main div for all the commments:

var allMsg = document.querySelector(".all-msg");
allMsg.innerHTM = "";

var userComment = document.createElement("div");
userComment.classList.add("user-comment");
allMsg.appendChild(userComment);

// create the array for the messages:

var messages = [];

function UserMessage(img, fullName, country, message) {
    this.img = img;
    this.fullName = fullName;
    this.country = country;
    this.message = message;
    this.showInfo = function() {
        // return this.img + this.fullName + this.country + this.message;
        return this.img + "<br>" + this.fullName + "<br>" + this.country + "<br>" + this.message;
    }
}

// call the function when the button is clicked:

var createCommentBtn = document.querySelector("button");
createCommentBtn.addEventListener("click", addComment);

// Go through the array to display the comments in the main div:

function showInfo () {
    var output = "";
    for(var i = 0; i < messages.length; i++) {
        output +=  messages[i].showInfo() + "<br>";
    }
    userComment.innerHTML = output;
}

function addComment() {
    var message = new UserMessage (
        "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128",
        inputFullName.value,
        inputCountry.value,
        inputMessage.innerHTML
        );
        console.log(inputMessage.innerHTML);
        messages.push(message);
        showInfo();
    }
    
    
    