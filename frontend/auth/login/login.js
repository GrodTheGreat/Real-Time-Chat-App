(() => {
  async function loginRequest(event) {
    event.preventDefault();
    window.onbeforeunload = () => "";

    const username = loginForm.querySelector("#username").value;
    const password = loginForm.querySelector("#password").value;

    if (!username) {
      alert("You must enter a username!");
      console.error("You must enter a username");
      return;
    }
    if (!password) {
      alert("You must enter a username!");
      console.error("You must enter a password");
      return;
    }

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (!response.ok) {
      console.error("Failed to log in");
    }

    //   What should I do with this?
    const result = await response.json();
  }

  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", loginRequest);
})();
