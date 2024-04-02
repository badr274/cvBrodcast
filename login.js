//========================
//========================
//========================
// Start Login Section
//========================
//========================
//========================
let login = document.querySelector(".login");
let phone = document.querySelector(".login .phone");
let password = document.querySelector(" .login .password");
let phoneInput = document.querySelector(".login .phone input");
let passwordInput = document.querySelector(" .login .password input");
let forgotPassword = document.querySelector(".login .forgot-btn");
let passwordChange = document.querySelector(".login .forgot");
let forgotExit = document.querySelector(".login .forgot i");
let forgotNumber = document.querySelector(".login .forgot input");
let forgotVerify = document.querySelector(".login .forgot .verify button");
let loginSubmit = document.querySelector(".login .submit input");
let LoginForm = document.querySelector(".login form");
let phoneAlert = document.querySelector(".login .phone-alert");
let passwordAlert = document.querySelector(".login .pass-alert");
let phoneAlertReq = document.querySelector(".login .phone-alert div");
let passwordAlertReq = document.querySelector(".login .pass-alert div");
let phoneAlertMin = document.querySelector(".login .phone-alert span");
let passwordAlertMin = document.querySelector(".login .pass-alert span");
let overlay = document.querySelector(".overlay");

// ==========================
// End Wrong/Right Section
// ==========================

let wrongResult = document.querySelector(".wrong-result");
let rightResult = document.querySelector(".right-result");
let wrongResultMsg = document.querySelector(".wrong-result span span");
let rightResultMsg = document.querySelector(".right-result span span");
let wrongResultExit = document.querySelector(".wrong-result > i");
let rightResultExit = document.querySelector(".right-result > i");

forgotVerify.addEventListener("click", () => {
  forgotVerify.innerHTML = "";
  let span = document.createElement("span");
  forgotVerify.appendChild(span);
  forgotVerify.style.opacity = "0.5";

  setTimeout(() => {
    if (forgotNumber.value === "01019955369") {
      rightResultMsg.innerHTML = "Success";
      rightResult.style.cssText = "opacity: 1; top: 150px; z-index: 999999";
    } else if (forgotNumber.value === "") {
      wrongResultMsg.innerHTML = "The phone number wasn't enterd";
      wrongResult.style.cssText = "opacity: 1; top: 150px; z-index: 999999";
    } else if (forgotNumber.value.length < 10) {
      wrongResultMsg.innerHTML = "The phone number must be at least 10 digits";
      wrongResult.style.cssText = "opacity: 1; top: 150px; z-index: 999999";
    } else {
      wrongResultMsg.innerHTML = "The phone number not exist";
      wrongResult.style.cssText = "opacity: 1; top: 150px; z-index: 999999";
    }
    forgotVerify.innerHTML = "Verify";
    forgotVerify.style.opacity = "1";
    setTimeout(exit, 1500);
  }, 500);
  wrongResultExit.addEventListener("click", exit);
  rightResultExit.addEventListener("click", exit);
  function exit() {
    wrongResult.style.cssText = "opacity: 0; top: 250px; z-index: -1";
    rightResult.style.cssText = "opacity: 0; top: 250px; z-index: -1";
  }
});
// ==========================
// End Wrong/Right Section
// ==========================
// ==========================
// Start Forgoting Section
// ==========================
forgotPassword.addEventListener("click", () => {
  overlay.classList.remove("hidden");
  passwordChange.classList.remove("hidden");
});
forgotExit.addEventListener("click", () => {
  overlay.classList.add("hidden");
  passwordChange.classList.add("hidden");
});
// ==========================
// End Forgoting Section
// ==========================
// ==========================
// Start Validate Form
// ==========================
loginSubmit.addEventListener("click", (e) => {
  let phoneVal = false;
  let passWordVal = false;

  if (phoneInput.value.length > 9) {
    phoneVal = true;
  }
  if (passwordInput.value.length > 9) {
    passWordVal = true;
  }

  if (phoneVal === false || passWordVal === false) {
    e.preventDefault();
  }
});
// ==========================
// End Validate Form
// ==========================

phoneInput.addEventListener("input", alertMessage);
passwordInput.addEventListener("input", alertMessage);

function alertMessage() {
  // ========================================
  // Start Phone Number Validation
  // ========================================
  if (phoneInput.value === "") {
    phoneAlert.classList.remove("hidden");
    phoneAlertReq.classList.remove("hidden");
  }
  if (phoneInput.value.length < 10) {
    phoneAlert.classList.remove("hidden");
    phoneAlertMin.classList.remove("hidden");
  } else {
    phoneAlert.classList.add("hidden");
    phoneAlertMin.classList.add("hidden");
  }
  // ========================================
  // End Phone Number Validation
  // ========================================
  // ========================================
  // Start Password Validation
  // ========================================

  if (passwordInput.value === "") {
    passwordAlert.classList.remove("hidden");
    passwordAlertReq.classList.remove("hidden");
  }
  if (passwordInput.value.length < 8) {
    passwordAlert.classList.remove("hidden");
    passwordAlertMin.classList.remove("hidden");
  } else {
    passwordAlert.classList.add("hidden");
    passwordAlertMin.classList.add("hidden");
  }

  // ========================================
  // End Password Validation
  // ========================================
  // ========================================
  // Start Login Submit Btn Disabled
  // ========================================

  let phoneVal = false;
  let passWordVal = false;

  if (phoneInput.value.length > 9) {
    phoneVal = true;
  }
  if (passwordInput.value.length > 9) {
    passWordVal = true;
  }

  if (phoneVal === true && passWordVal === true) {
    loginSubmit.classList.remove("disabled");
  } else {
    loginSubmit.classList.add("disabled");
  }
}
// ========================================
// End Login Submit Btn Disabled
// ========================================

//========================
//========================
//
// End Login Section
//
//========================
//========================
