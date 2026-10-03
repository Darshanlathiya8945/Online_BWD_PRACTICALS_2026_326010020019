function checkEligibility() {
    let age = Number(document.getElementById("age").value);
    let attendance = Number(document.getElementById("attendance").value);
    let marks = Number(document.getElementById("marks").value);

    if (age === 0 || attendance === 0 || marks === 0) {
        alert("Please enter all the required details.");
    }

    else if (age >= 18 && attendance >= 75 && marks >= 40) {
        alert("Congratulations! The student is eligible for the examination/admission.");
    }

    else if (age >= 18 && attendance < 75 && marks >= 40) {
        alert("The student is not eligible because attendance is below 75%.");
    }

    else if (age >= 18 && attendance >= 75 && marks < 40) {
        alert("The student is not eligible because marks are below 40%.");
    }

    else if (age < 18) {
        alert("The student is not eligible because the minimum age is 18 years.");
    }

    else {
        alert("The student is not eligible. Age, attendance, and marks requirements are not satisfied.");
    }
}