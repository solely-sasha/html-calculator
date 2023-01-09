document.calculator.addEventListener('submit', function(e) {
    e.preventDefault()


    let num1 = document.calculator.num1.value;
    let num2 = document.calculator.num2.value;

    let additionResult = parseInt(num1) + parseInt(num2);

    let additionOutput = document.getElementById("addition");
    additionOutput.append(additionResult)



    function resetResults() {
        clearAddition.textContent = "Result: "


    }


    let resetButton = document.getElementById('resetAddition')
    let clearAddition = document.getElementById('addition');
    resetButton.addEventListener('click', resetResults)




    let minus1 = document.calculator.minus1.value;
    let minus2 = document.calculator.minus2.value;

    let subtractionResult = parseInt(minus1) - parseInt(minus2);

    let subtractionOutput = document.getElementById("subtraction");
    subtractionOutput.append(subtractionResult)


    function resetSubtraction() {
        clearSubtraction.textContent = "Result: "


    }


    let resetSubtractionButton = document.getElementById('resetSubtraction')
    let clearSubtraction = document.getElementById('subtraction');
    resetSubtractionButton.addEventListener('click', resetSubtraction)


    let times1 = document.calculator.times1.value;
    let times2 = document.calculator.times2.value;

    let multiplicationResult = parseInt(times1) * parseInt(times2);

    let multiplicationOutput = document.getElementById("multiplication");
    multiplicationOutput.append(multiplicationResult)


    function resetMultiplication() {
        clearMultiplication.textContent = "Result: "


    }


    let resetMultiplicationButton = document.getElementById('resetMultiplication')
    let clearMultiplication = document.getElementById('multiplication');
    resetMultiplicationButton.addEventListener('click', resetMultiplication)




})



