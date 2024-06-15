document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");

    var modal = document.getElementById('loginModal');
    var btn = document.getElementById('loginBtn');
    var span = document.getElementsByClassName('close')[0];
    var form = document.getElementById('loginForm');

    if (!modal) {
        console.error("Modal element not found");
        return;
    }

    if (!btn) {
        console.error("Button element not found");
        return;
    }

    if (!span) {
        console.error("Close span element not found");
        return;
    }

    // Display the modal when the login button is clicked
    btn.onclick = function() {
        modal.style.display = 'block';
    }

    // Hide the modal when the close button is clicked
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // Hide the modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    var emailField = document.getElementById('email');
    var usernameField = document.getElementById('username');
    var passwordField = document.getElementById('password');
    var confirmPasswordField = document.getElementById('confirmPassword');

    var emailError = document.getElementById('emailError');
    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    function validateField(field, errorField, message) {
        if (field.value.trim() === "") {
            errorField.textContent = message;
            field.classList.add('error-border');
        } else {
            errorField.textContent = "";
            field.classList.remove('error-border');
        }
    }

    function validateEmail() {
        var email = emailField.value.trim();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = "Invalid email format.";
            emailField.classList.add('error-border');
        } else {
            emailError.textContent = "";
            emailField.classList.remove('error-border');
        }
    }

    emailField.addEventListener('blur', () => validateField(emailField, emailError, "Email is required."));
    usernameField.addEventListener('blur', () => validateField(usernameField, usernameError, "Username is required."));
    passwordField.addEventListener('blur', () => validateField(passwordField, passwordError, "Password is required."));
    confirmPasswordField.addEventListener('blur', () => validateField(confirmPasswordField, confirmPasswordError, "Confirm Password is required."));

    emailField.addEventListener('blur', validateEmail);
    confirmPasswordField.addEventListener('blur', function() {
        if (confirmPasswordField.value !== passwordField.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            confirmPasswordField.classList.add('error-border');
        } else {
            confirmPasswordError.textContent = "";
            confirmPasswordField.classList.remove('error-border');
        }
    });

    // Handle form submission
    form.onsubmit = function(event) {
        event.preventDefault();
        validateField(emailField, emailError, "Email is required.");
        validateField(usernameField, usernameError, "Username is required.");
        validateField(passwordField, passwordError, "Password is required.");
        validateField(confirmPasswordField, confirmPasswordError, "Confirm Password is required.");
        validateEmail();

        if (confirmPasswordField.value !== passwordField.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
        }

        if (emailError.textContent === "" && usernameError.textContent === "" && passwordError.textContent === "" && confirmPasswordError.textContent === "") {
            // Simulate a login process
            console.log("Logging in with", emailField.value, usernameField.value, passwordField.value);
            alert("Logging in..."); // Placeholder for actual login process
            modal.style.display = 'none';
        }
    }
});
