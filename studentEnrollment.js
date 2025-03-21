// Create two arrays for subjects
let DSA = [];
let WebDev = [];

// Subject selection
let subjectChoice = prompt("Select a subject: \n(A) DSA \n(B) WebDev").toUpperCase();
let selectedSubject = (subjectChoice === "A") ? DSA : WebDev;

// Operations loop
let operation;
while (operation !== "D") {
    operation = prompt("Choose an operation: \n(A) Enroll \n(B) Unenroll \n(C) Select Another Subject \n(D) Exit").toUpperCase();

    if (operation === "A") { // Enroll student
        let studentName = prompt("Enter the student's name to enroll:");
        selectedSubject.push(studentName);
        alert(studentName + " has been enrolled.");
    
    } else if (operation === "B") { // Unenroll student
        if (selectedSubject.length === 0) {
            alert("No students are enrolled in this subject.");
        } else {
            alert("Currently enrolled students: " + selectedSubject.join(", "));
            let removeName = prompt("Enter the student's name to unenroll:");
            let index = selectedSubject.indexOf(removeName);
            if (index !== -1) {
                selectedSubject.splice(index, 1);
                alert(removeName + " has been unenrolled.");
            } else {
                alert("Student not found.");
            }
        }

    } else if (operation === "C") { // Select another subject
        subjectChoice = prompt("Select a subject: \n(A) DSA \n(B) WebDev").toUpperCase();
        selectedSubject = (subjectChoice === "A") ? DSA : WebDev;
        alert("Switched subjects successfully.");

    } else if (operation !== "D") {
        alert("Invalid choice. Try again.");
    }
}

// Print enrolled students and exit
alert("Enrolled Students:\nDSA: " + (DSA.length ? DSA.join(", ") : "None") + "\nWebDev: " + (WebDev.length ? WebDev.join(", ") : "None"));
