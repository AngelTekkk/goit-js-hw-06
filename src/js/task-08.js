const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const userLogin = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(userLogin);

  event.currentTarget.reset();
}
