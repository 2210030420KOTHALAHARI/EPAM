document.getElementById('reverseButton').addEventListener('click', function() {
    const inputNumber = parseInt(document.getElementById('numberInput').value);
    const reversedNumber = reverseNumber(inputNumber);
    document.getElementById('result').textContent = "Reversed number: " + reversedNumber;
});

function reverseNumber(number) {
    const sign = Math.sign(number);
    let numString = Math.abs(number).toString();
    let reversedString = numString.split('').reverse().join('');
    return sign * parseInt(reversedString);
}