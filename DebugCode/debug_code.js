function performOperation(){
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid number
    if(!isNaN(num1) && !isNaN(num2)){
        // Preform the operation
            let result = divide(num1, num2);

            // Display result
            displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function divide(a, b){
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a / b;
}

function displayResult(result){
    // Disply the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}