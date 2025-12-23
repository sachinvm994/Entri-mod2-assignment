const userForm = document.getElementById("userForm");
userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let refText = document.getElementById("error");
  let firstName = document.getElementById("firstname").value.trim();
  let lastName = document.getElementById("lastname").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmpassword").value.trim();
  let termsChecked = document.getElementById("terms").checked;
  refText.textContent = "";

  if (firstName.length < 6) {
    console.log("First name must be at least 6 characters long");
    refText.textContent = "First name must be at least 6 characters long";
    return;
  }

    if (lastName ==="") {
    console.log("Last Name cannot be empty");
    refText.textContent = "Last Name cannot be empty";
    return;
  }

  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/i;
  if (!emailPattern.test(email))  {
    console.log("Invalid email");
    refText.textContent = "Invalid email";
    return;
  }

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!password.match(passwordPattern)) {
    console.log(
      "Password is not valid it should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    );
    refText.textContent =
      "Password is not valid it should contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    return;
  }

  if (password !== confirmPassword) {
    console.log("Passwords do not match");
    refText.textContent = "Passwords do not match";
    return;
  }

    if (!termsChecked) {
    refText.textContent = "You must agree before submitting";
    return;
  }
  alert("Form submitted successfully!");
  userForm.reset();

});
