var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contact-name").value;
    
    if(name.length == 0){
        nameError.innerHTML = 'Fullname is Required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write fullname';
        return false;
    }
    else{
        nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}

function validatePhone(){
    var phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'invalid phone number';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digit required';
        return false;
    }
    
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
}

function validateMail(){
    var mail = document.getElementById("contact-email").value;

    if(mail.length == 0){
        emailError.innerHTML = 'Enter your mail';
        return false;
    }
    if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalid';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatetext(){
    var message = document.getElementById("contact-text").value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + 'more charachter required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateMail() || !validatetext()){
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fill the input area";
        setTimeout(function(){
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
}