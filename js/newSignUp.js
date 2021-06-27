let signUpBtn = document.querySelector("form > input"),
    userRole = document.querySelector(".userRole select"),
    userEmail  = document.querySelector(".userEmail input"),
    userEmailLabel  = document.querySelector(".userEmail label"),
    userPassword = document.querySelector(".userPassword input"),
    userPasswordLabel  = document.querySelector(".userPassword label"),
    userConfirmPass = document.querySelector(".userConfirmPassword input"),
    userConfirmPassLabel  = document.querySelector(".userConfirmPassword label"),
    passVisibility = document.querySelectorAll(".userPassword i"),
    confirmPassVisibility = document.querySelectorAll(".userConfirmPassword i");

/*************  PASSWORD VISIBILITY      *******************/
/************** visibility function *********/
function visibilePassword (iconAttr, inputField) {
    if (iconAttr.getAttribute("class") == "far fa-eye-slash") {
        iconAttr.setAttribute("class", "far fa-eye")
        inputField.setAttribute("type", "text")
    }
    else if (iconAttr.getAttribute("class") == "far fa-eye") {
        iconAttr.setAttribute("class", "far fa-eye-slash")
        inputField.setAttribute("type", "password")
    }
}

passVisibility.forEach((icon) => {
    icon.addEventListener("click", function() {
        visibilePassword(icon, passVisibility)
    })   
})

confirmPassVisibility.forEach((icon) => {
    icon.addEventListener("click", function() {
        visibilePassword(icon, confirmPassVisibility)
    })
    
})

/*******************    Input Label Animation Function   *****************/
/**********Animation slide up************/
function slideUp (inputField, inputLabel) {
    inputField.setAttribute("placeholder", "")
    inputLabel.classList.add("slideUp")
}
/***********Animation slide down**********/
function slideDown (inputField, inputLabel, placeHolderName) {
    inputField.setAttribute("placeholder", placeHolderName)
    inputLabel.classList.remove("slideUp")
}

/************  Input Label Animation    ********************/
userEmail.addEventListener("focus", () => {slideUp(userEmail, userEmailLabel);})
userEmail.addEventListener("blur", function () { slideDown(userEmail, userEmailLabel, "Email Address") })

userPassword.addEventListener("focus", () => {slideUp(userPassword, userPasswordLabel);})
userPassword.addEventListener("blur", function () { slideDown(userPassword, userPasswordLabel, "Password") })

userConfirmPass.addEventListener("focus", () => {slideUp(userConfirmPass, userConfirmPassLabel);})
userConfirmPass.addEventListener("blur", function () { slideDown(userConfirmPass, userConfirmPassLabel, "Confirm Password") })



/*************  Send Data To The Backend
    
************      Login Click   ****************/
// signUpBtn.addEventListener("click", function(e) {
//     if(userRole.value && userEmail.value && userPassword.value) {
//         e.preventDefault();
//         userLoginDetails = {
//             "id" : Math.random() * 10,
//             "email" : userEmail.value, 
//             "password" : userPassword.value,
//             "role": userRole.value
//         }
//         sendUserData(userLoginDetails);
//      }
// })

/* API has been tested and it works fine    ***************/
// function sendUserData (data) {
//     fetch("https://dapphome.herokuapp.com/api/teachers", {
//         method: 'POST',
//         body: JSON.stringify({
//             "firstname": "Faith",
//             "lastname" : "Daniel",
//             "slug" : "jerry-amos",
//             "country" : "Nigeria",
//             "state" : "Lagos",
//             "gender" : "F",
//             "age" : 31,
//             "field" : "Languages",
//             "subject_code" : 101,
//             "price" : 3000,
//             "bio_heading" : "Experienced Tutor",
//             "bio" : "Hi,My name is Henry Solis and I am from Mexico.I am a language teacher and I love my job. I have more than ten years of experience in the area of ??education. I like to teach in a dynamic and interesting way, always focused on the needs of my students. My goal is to make learning simple, attractive and effective. I am also a language student, I am currently studying Arabic, this allows me to put myself in the student's situation and better understand their needs. I really like to transmit the cultural aspects of the language and cover all aspects of its production, that is, conversation, writing, listening and listening, if these are part of the student's interests o f course. My methods are always adapted to the way my students learn and to their goals. I seek to stimulate their attention, discuss topics of their interest and stimulate their curiosity.",
//             "rating" : 4,
//             "is_available" : 1,
//             "have_online_course" : 0,
//             "img_url" : "https://res.cloudinary.com/codepickin/image/upload/v1624103821/hometech/teacher3_j4g0zq.png",
//             "skills_code" : 503
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     })
//     .then((response) => response.json())
//     .then((json) => {
    
        /* using session storage to link data between two webpages for easy access before making request to the database */

//         sessionStorage.setItem("teacherDetails", JSON.stringify(json))
//         window.location.href = ""
//     });
// }