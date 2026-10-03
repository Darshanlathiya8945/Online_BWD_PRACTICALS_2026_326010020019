function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    const errors = document.querySelectorAll(".error");

    errors.forEach(function(error) {
        error.textContent = "";
    });

    document.getElementById("successMessage").textContent = "";
}

function validateName() {
    const name = document.getElementById("name").value.trim();

    if (name === "") {
        showError("nameError", "Name is required.");
        return false;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
        showError("nameError", "Name should contain only letters.");
        return false;
    }

    if (name.length < 3) {
        showError("nameError", "Name must contain at least 3 characters.");
        return false;
    }

    return true;
}

function validateEmail() {
    const email = document.getElementById("email").value.trim();

    const emailPattern =
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (email === "") {
        showError("emailError", "Email is required.");
        return false;
    }

    if (!emailPattern.test(email)) {
        showError("emailError", "Enter a valid email address.");
        return false;
    }

    return true;
}

function validatePassword() {
    const password = document.getElementById("password").value;

    if (password === "") {
        showError("passwordError", "Password is required.");
        return false;
    }

    if (password.length < 8) {
        showError(
            "passwordError",
            "Password must contain at least 8 characters."
        );
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        showError(
            "passwordError",
            "Password must contain an uppercase letter."
        );
        return false;
    }

    if (!/[0-9]/.test(password)) {
        showError(
            "passwordError",
            "Password must contain a number."
        );
        return false;
    }

    return true;
}

function validatePhone() {
    const phone = document.getElementById("phone").value.trim();

    if (!/^[0-9]{10}$/.test(phone)) {
        showError(
            "phoneError",
            "Phone number must contain exactly 10 digits."
        );
        return false;
    }

    return true;
}

function validateDOB() {
    const dob = document.getElementById("dob").value;

    if (dob === "") {
        showError("dobError", "Date of birth is required.");
        return false;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
        showError("dobError", "Date of birth cannot be in the future.");
        return false;
    }

    return true;
}

function validateGender() {
    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (!gender) {
        showError("genderError", "Please select your gender.");
        return false;
    }

    return true;
}

function validateCourse() {
    const course = document.getElementById("course").value;

    if (course === "") {
        showError("courseError", "Please select a course.");
        return false;
    }

    return true;
}

function validateTerms() {
    const terms = document.getElementById("terms").checked;

    if (!terms) {
        showError(
            "termsError",
            "You must agree to the terms and conditions."
        );
        return false;
    }

    return true;
}

document.getElementById("registrationForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        clearErrors();

        const validName = validateName();
        const validEmail = validateEmail();
        const validPassword = validatePassword();
        const validPhone = validatePhone();
        const validDOB = validateDOB();
        const validGender = validateGender();
        const validCourse = validateCourse();
        const validTerms = validateTerms();

        if (
            validName &&
            validEmail &&
            validPassword &&
            validPhone &&
            validDOB &&
            validGender &&
            validCourse &&
            validTerms
        ) {
            document.getElementById("successMessage").textContent =
                "Registration successful!";

            document.getElementById("registrationForm").reset();
        }
    }
);

document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("password").addEventListener(
    "blur",
    validatePassword
);
document.getElementById("phone").addEventListener("blur", validatePhone);
document.getElementById("dob").addEventListener("change", validateDOB);
document.getElementById("course").addEventListener(
    "change",
    validateCourse
);