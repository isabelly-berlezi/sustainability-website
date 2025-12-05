function submitNewsletter(event) {
  event.preventDefault();

  const name = document.getElementById("nameNewsletter");
  const email = document.getElementById("emailNewsletter");

  const nameFeedback = document.getElementsByClassName("name-feedback")[0];
  const emailFeedback = document.getElementsByClassName("email-feedback")[0];

  let isValid = true;

  if (name.value === "" || name.value.length < 3) {
    isValid = false;
    nameFeedback.textContent = "Name must be at least 3 characters long.";
    nameFeedback.style.color = "red";
  } else {
    nameFeedback.textContent = "✓ Valid name";
    nameFeedback.style.color = "green";
  }

  if (
    email.value === "" ||
    !email.value.includes("@") ||
    !email.value.includes(".")
  ) {
    isValid = false;
    emailFeedback.textContent = "Please enter a valid email address.";
    emailFeedback.style.color = "red";
  } else {
    emailFeedback.textContent = "✓ Valid email";
    emailFeedback.style.color = "green";
  }

  if (isValid) {
    name.value = "";
    email.value = "";
    nameFeedback.textContent = "";
    emailFeedback.textContent =
      "We'll never share your email with anyone else.";
    emailFeedback.style.color = "#2b2527";

    showSuccessToast();
  } else {
    return false;
  }
}

function showSuccessToast() {
  const toastElement = document.getElementsByClassName("toast")[0];
  const toast = new bootstrap.Toast(toastElement, {
    autohide: true,
    delay: 5000,
  });

  toast.show();
}
