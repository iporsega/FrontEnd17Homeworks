// get the fields
var firstName = document.querySelector("#first-name");
var lastName = document.querySelector("#last-name");
var message = document.querySelector("#message");

document.querySelector("button").addEventListener("click", validateForm);

function validateForm(event) {
    
    // Get the value of the input fields
    var errorFirstName = firstName.value;
    var errorLastName = lastName.value;
    var errorMessage = message.value;
    
    //   If fields are empty, display ERROR
    if (errorFirstName == "" || errorFirstName == " ") {
        firstName.classList.add("error");
    } else {
        firstName.classList.remove("error");
    }
    
    if (errorLastName == "" || errorLastName == " ") {
        lastName.classList.add("error");
    } else {
        lastName.classList.remove("error");
    }
    
    if (errorMessage == "" || errorMessage == " ") {
        message.classList.add("error");
    } else {
        message.classList.remove("error");
    } 
    
    // gender vailidation
    var male = document.querySelector('#male');
    var female = document.querySelector('#female');
    var gender = "";
    if(male.checked == true) {   
        gender = male.value;
    } else {  
        gender = female.value; 
    }  
    
    //   Display all fields info in console
    if(errorFirstName != "" && errorFirstName != " " && errorLastName != "" && errorLastName != " " && errorMessage != "" && errorMessage != " ") {
        console.log(firstName.value + " " + lastName.value + "\n" + gender + "\n" + message.value);
        
        // display SUCCES MESSAGE 
        var contactFormWrapper= document.querySelector(".contact-form-wrapper");
        var succesMessage = document.createElement('div');
        succesMessage.classList.add("succes-message");
        succesMessage.innerHTML = firstName.value + ", your message was succesfully sent. Thank you!";
        contactFormWrapper.appendChild(succesMessage);
    }
}