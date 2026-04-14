document.getElementById("convertBtn").addEventListener("click", convertTemp);

function convertTemp() {
    let input = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    // Validation
    if (input === "" || isNaN(input)) {
        result.innerHTML = "❌ Enter a valid number!";
        return;
    }

    let temp = parseFloat(input);
    let output = "";

    if (unit === "fahrenheit") {
        let c = (temp - 32) * 5 / 9;
        output = c.toFixed(4) + " °C";
    } 
    else if (unit === "celsius") {
        let f = (temp * 9 / 5) + 32;
        output = f.toFixed(4) + " °F";
    } 
    else if (unit === "kelvin") {
        let c = temp - 273.15;
        output = c.toFixed(4) + " °C";
    }

    result.innerHTML = "✅ " + output;
}