let signUpBtn = document.querySelector("form > input"),
    userRole = document.querySelector(".userRole select"),
    userEmail  = document.querySelector(".userEmail input"),
    userPassword = document.querySelector(".userPassword input"),
    passVisibility = document.querySelectorAll(".userPassword i");

/*************  Password Visibility      *******************/
passVisibility.forEach((icon) => {
    icon.addEventListener("click", function() {
        if (this.getAttribute("class") == "far fa-eye-slash") {
            this.setAttribute("class", "far fa-eye")
            userPassword.setAttribute("type", "text")
        }
        else if (this.getAttribute("class") == "far fa-eye") {
            this.setAttribute("class", "far fa-eye-slash")
            userPassword.setAttribute("type", "password")
        }
    })
    
})
/************      Login Click   ****************/
signUpBtn.addEventListener("click", function(e) {
    if(userRole.value && userEmail.value && userPassword.value) {
        e.preventDefault();
        userLoginDetails = {
            "email" : userEmail.value, 
            "password" : userPassword.value,
            "role": userRole.value
        }
        getUserData(userLoginDetails);
     }
})

/*************  Send Data To The Backend
 * NB: It is not tested yet, just a theory for now ****************/
const getUserData = async (data) => {
    let response = await fetch("https://ultrasofti.github.io/hometechapi/teacher.json", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });
    let newUserData = await response.json();
    console.log(newUserData)
}