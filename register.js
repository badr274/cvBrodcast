let register = document.querySelector(".register");
let registerForm = document.querySelector(".register form");
let userName = document.querySelector(".register .username input");
let registerPhone = document.querySelector(".register .phone input");
let registerPassword = document.querySelector(".register .password input");
let confirmPassword = document.querySelector(".register .confirm-pass input");
let checkBox = document.querySelector(".register .check input");
let registerSubmit = document.querySelector(".register .submit button");

let wrongResult = document.querySelector(".wrong-result");
let rightResult = document.querySelector(".right-result");
let wrongResultMsg = document.querySelector(".wrong-result span span");
let rightResultMsg = document.querySelector(".right-result span span");
let wrongResultExit = document.querySelector(".wrong-result > i");
let rightResultExit = document.querySelector(".right-result > i");

let confirmed = document.querySelector(".register .confirmed");
confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value === registerPassword.value) {
    confirmed.classList.remove("hidden");
  }
});

let passwordShow = document.querySelector(".register .password i");
let confirmPasswordShow = document.querySelector(".register .confirm-pass i");

showPass(passwordShow);
showPass(confirmPasswordShow);

function showPass(element) {
  element.addEventListener("click", () => {
    if (element.previousElementSibling.type === "text") {
      element.previousElementSibling.type = "password";
    } else {
      element.previousElementSibling.type = "text";
    }
  });
}

registerSubmit.addEventListener("click", () => {
  registerSubmit.innerHTML = "";
  let span = document.createElement("span");
  registerSubmit.appendChild(span);
  registerSubmit.style.opacity = "0.5";

  setTimeout(() => {
    registerSubmit.innerHTML = "Complete Information";
    registerSubmit.style.opacity = "1";
    setTimeout(exit, 1500);
    let userVal = false;
    let passVal = false;
    let phoneVal = false;
    let confirmVal = false;

    if (userName.value.length >= 3) {
      userVal = true;
    } else {
      wrongResultMsg.innerHTML = "User name must be at least 3 characters";
      wrongResult.style.cssText = "opacity: 1; top: 150px; z-index: 999999";
    }

    if (registerPhone.value.length > 9) {
      phoneVal = true;
    } else {
      wrongResultMsg.innerHTML = "Phone number must be at least 10 digits";
      wrongResult.style.cssText = "opacity: 1; top: 150px; z-index: 999999";
    }

    if (registerPassword.value.length >= 8) {
      passVal = true;
    } else {
      wrongResultMsg.innerHTML = "Password must be at least 8 characters";
      wrongResult.style.cssText = "opacity: 1; top: 150px; z-index: 999999";
    }

    if (confirmPassword.value === registerPassword.value) {
      confirmVal = true;
    } else {
      wrongResultMsg.innerHTML = "Confirm password not match password";
      wrongResult.style.cssText = "opacity: 1; top: 150px; z-index: 999999";
    }

    if (checkBox.checked) {
      console.log("Checking");
    } else {
      wrongResultMsg.innerHTML = "Cehcked terms and Conditions";
      wrongResult.style.cssText = "opacity: 1; top: 150px; z-index: 999999";
    }
    if (
      passVal === true &&
      phoneVal === true &&
      confirmVal === true &&
      userVal === true &&
      checkBox.checked === true
    ) {
      rightResultMsg.innerHTML = "Successfully registered";
      rightResult.style.cssText = "opacity: 1; top: 150px; z-index: 999999";
      setTimeout(() => {
        overlay.classList.remove("hidden");
        theCode.classList.remove("hidden");
        codeInputs[0].focus();
      }, 1000);
    }

    wrongResultExit.addEventListener("click", exit);
    rightResultExit.addEventListener("click", exit);
    function exit() {
      wrongResult.style.cssText = "opacity: 0; top: 250px; z-index: -1";
      rightResult.style.cssText = "opacity: 0; top: 250px; z-index: -1";
    }
  }, 500);
});
//=================================
// Start Validate Register Form
//=================================

let overlay = document.querySelector(".overlay");
let theCode = document.querySelector(".register .code");
let theCodeExit = document.querySelector(".register .code i");

let codeInputs = [
  ...document.querySelectorAll(".register .code .code-inputs input"),
];
let codeBtn = document.querySelector(".register .code button");
theCodeExit.addEventListener("click", () => {
  overlay.classList.add("hidden");
  theCode.classList.add("hidden");
});

codeInputs.forEach((input) => {
  input.addEventListener("input", () => {
    let nextInput = input.nextElementSibling;
    if (nextInput !== null && input.value !== "") {
      nextInput.focus();
    }

    if (codeInputs[3].value !== "") {
      codeBtn.classList.add("active");
    } else {
      codeBtn.classList.remove("active");
    }
  });

  input.addEventListener("keyup", (e) => {
    if (input.previousElementSibling !== null) {
      if (e.key === "Backspace") {
        e.target.value === "";
        input.previousElementSibling.focus();
      }
    }
  });
});
