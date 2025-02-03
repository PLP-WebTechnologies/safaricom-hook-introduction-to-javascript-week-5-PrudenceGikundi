// 🟢 JavaScript Basics - Variables and Data Types
let name = "John Doe"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let hobbies = ["Coding", "Gaming", "Reading"]; // Array
let person = { firstName: "John", lastName: "Doe", age: 25 }; // Object

// Logging values and types in the console
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// 🟢 Simple Calculator Function
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input! Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
            break;
        default:
            alert("Invalid operation! Please use +, -, *, or /.");
            return;
    }

    alert(`Result: ${result}`);
}

// Uncomment below line to run calculator when script loads
// calculator();

// 🟢 Function to Greet a User
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript Learning.`;
}

// Wait until DOM is loaded to modify HTML
document.addEventListener("DOMContentLoaded", function () {
    // 🟢 Change the text of the <h1> element
    document.getElementById("main-heading").textContent = "JavaScript in Action!";

    // 🟢 Add a new <p> inside the dynamic-content <div>
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This content was added dynamically using JavaScript.";
    document.getElementById("dynamic-content").appendChild(newParagraph);

    // 🟢 Display Greeting
    document.getElementById("greeting").textContent = greetUser("John");

    // 🟢 Display Voting Eligibility
    checkVotingEligibility();

    // 🟢 Display Numbers from 1 to 10
    displayNumbers();
});

// 🟢 Check Voting Eligibility
function checkVotingEligibility() {
    let userAge = parseInt(prompt("Enter your age:"));

    if (isNaN(userAge) || userAge < 0) {
        alert("Please enter a valid age!");
        return;
    }

    let message = userAge >= 18 ? "You are eligible to vote!" : "You are not old enough to vote.";
    document.getElementById("eligibility").textContent = message;
}

// 🟢 Display Numbers from 1 to 10
function displayNumbers() {
    let list = document.getElementById("number-list");
    for (let i = 1; i <= 10; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}
