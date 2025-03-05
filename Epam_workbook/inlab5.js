// Function to calculate profit
function calculateProfit(principal, years) {
    let interestRate = 5.0; // Fixed 5% annual interest rate
    let profit = (principal * interestRate * years) / 100;
    let totalAmount = principal + profit;

    return {
        profit: profit.toFixed(2),
        totalAmount: totalAmount.toFixed(2)
    };
}

// Function to handle calculation and display results
function handleCalculation() {
    let principal = parseFloat(document.getElementById("principal").value);
    let years = parseInt(document.getElementById("years").value);

    if (isNaN(principal) || isNaN(years) || principal <= 0 || years <= 0) {
        document.getElementById("result").innerHTML = "Invalid input. Please enter valid numbers.";
        return;
    }

    let result = calculateProfit(principal, years);

    document.getElementById("result").innerHTML =
        `Total Profit: ${result.profit} <br> Total Amount After ${years} Years: ${result.totalAmount}`;
}
