(() => {
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
      console.error("You must enter a username");
      return;
    }
    if (password !== confirmedPassword) {
      alert("Passwords must match!");
      console.error("Passwords must match!");
      return;
    }
    if (password.length < 12) {
      alert("Password must be longer");
      console.log("Password must be longer");
      return;
    } else if (password.length < 16) {
      alert("Consider using a longer password");
      console.warn("Consider using a longer password");
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
      console.error("Failed to sign up!");
      return;
    }
    //   What should I do with this?
    const result = await response.json();
  }

  const signUpForm = document.getElementById("signup-form");
  signUpForm.addEventListener("submit", signUp);
})();
