document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    document.getElementById("display-name").innerText = name;
    document.getElementById("display-email").innerText = email;
    document.getElementById("display-subject").innerText = subject;
    document.getElementById("display-message").innerText = message;
  });
});

showWelcomePopup();

function showWelcomePopup() {
   let username = prompt("Please enter your name:");
   if (username && username.trim() !== '') {
      document.getElementById("welcome-user").innerText = "Hello, " + username + "!";
   }
}
