function calculateResult() {

    let mark1 = Number(document.getElementById("sub1").value);
    let mark2 = Number(document.getElementById("sub2").value);
    let mark3 = Number(document.getElementById("sub3").value);
    let mark4 = Number(document.getElementById("sub4").value);
    let mark5 = Number(document.getElementById("sub5").value);

    let total = mark1 + mark2 + mark3 + mark4 + mark5;

    let percentage = total / 5;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } 
    else if (percentage >= 80) {
        grade = "A";
    } 
    else if (percentage >= 70) {
        grade = "B";
    } 
    else if (percentage >= 60) {
        grade = "C";
    } 
    else if (percentage >= 50) {
        grade = "D";
    } 
    else {
        grade = "F";
    }

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + " / 500<br>" +
        "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Grade: " + grade;
}