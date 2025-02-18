async function signUp(event) {
  event.preventDefault();
  window.onbeforeunload = () => "";

  const username = signUpForm.querySelector("#username").value;
  const firstName = signUpForm.querySelector("#first").value;
  const lastName = signUpForm.querySelector("#last").value;
  const password = signUpForm.querySelector("#password").value;
  const confirmedPassword = signUpForm.querySelector("#confirm").value;

  if (!username) {
    alert("You must enter a username!");
    throw Error("You must enter a password");
  }
  if (password != confirmedPassword) {
    alert("Passwords must match!");
    throw Error("Passwords must match!");
  }

  const response = await fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      firstName,
      lastName,
    }),
  });
  if (!response.ok) {
    throw Error("Failed to sign up!");
  }
  //   What should I do with this?
  const result = await response.json();
}

const signUpForm = document.getElementById("signup-form");
signUpForm.addEventListener("submit", signUp);
