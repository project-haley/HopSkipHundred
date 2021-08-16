
// call Hello World
function HelloWorld() {
    alert("Hello World!")
}



function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    let numbers = generateNumbers(startValue, endValue);

    return numbers;

    alert("Start Value: " + String(numbers));
}

function generateNumbers(start, end) {
    let numbers = [];

    for (let index = start; index <= end; index++) {
        numbers.push(index);
    }

    return numbers;
}

function generateTable() {
    let numbers = getValues();
    let startValue = numbers[0];
    let endValue = numbers[numbers.length - 1];
    let table = document.getElementById("results")
    let tableString = ""

    for (index = startValue; index <= endValue; index++) {
        tableString += `<tr><td>${index}</td></tr>`
    }

    table.innerHTML = tableString;
    // alert(String(startValue) + " and " + String(endValue));
}