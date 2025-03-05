// Define an array containing sample values
const numbers = [10, 25, 30, 45, 50, 60, 75, 80];

// Create a function that filters the array based on a predefined condition
function filterEvenNumbers() {
    return numbers.filter(num => num % 2 === 0); // Filtering even numbers
}

// Call the function
const filteredNumbers = filterEvenNumbers();

// Display result in console
console.log(filteredNumbers);

// Display result on the webpage
document.getElementById("result").textContent = "Filtered Numbers: " + filteredNumbers.join(", ");
