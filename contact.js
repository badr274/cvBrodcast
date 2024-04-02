let contact = document.querySelector(".contact");
let contactForm = document.querySelector(".contact form");
let username = document.querySelector(".contact .username input");
let phone = document.querySelector(".contact .phone input");
let country = document.querySelector(".contact .phone .country");
let textArea = document.querySelector(".contact textarea");
let sendBtn = document.querySelector(".contact .submit button");

let wrongResult = document.querySelector(".wrong-result");
let rightResult = document.querySelector(".right-result");
let wrongResultMsg = document.querySelector(".wrong-result span span");
let rightResultMsg = document.querySelector(".right-result span span");
let wrongResultExit = document.querySelector(".wrong-result > i");
let rightResultExit = document.querySelector(".right-result > i");

sendBtn.addEventListener("click", () => {
  sendBtn.innerHTML = "";
  let span = document.createElement("span");
  sendBtn.appendChild(span);
  sendBtn.style.opacity = "0.5";

  setTimeout(() => {
    sendBtn.innerHTML = "Send";
    sendBtn.style.opacity = "1";
    setTimeout(exit, 1500);
  }, 500);

  let countryVal = false;
  let phoneVal = false;
  if (country.value !== "") {
    countryVal = true;
  } else {
    wrongResultMsg.innerHTML = "Country field is required";
    wrongResult.style.cssText = "opacity: 1; top: 150px; z-index: 999999";
  }
  if (phone.value !== "" && phone.value.length > 9) {
    phoneVal = true;
  } else {
    wrongResultMsg.innerHTML = "Phone number must be at least 9 characters";
    wrongResult.style.cssText = "opacity: 1; top: 150px; z-index: 999999";
  }
  if (countryVal === true && phoneVal === true) {
    setTimeout(() => {
      contactForm.submit();
    }, 500);
  }

  wrongResultExit.addEventListener("click", exit);
  rightResultExit.addEventListener("click", exit);
  function exit() {
    wrongResult.style.cssText = "opacity: 0; top: 250px; z-index: -1";
    rightResult.style.cssText = "opacity: 0; top: 250px; z-index: -1";
  }
});
