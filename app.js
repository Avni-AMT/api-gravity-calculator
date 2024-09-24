function calculateAPI() {
    const specificGravity = parseFloat(document.getElementById('specificGravity').value);
    const temperatureUnit = document.getElementById('temperatureUnit').value;
    const resultDiv = document.getElementById('result');
  
    if (!specificGravity || specificGravity <= 0) {
      resultDiv.innerHTML = "Please enter a valid specific gravity.";
      return;
    }
  
    // Calculate API gravity
    const apiGravity = 141.5 / specificGravity - 131.5;
  
    let temperature;
    if (temperatureUnit === 'celsius') {
      // Convert to Celsius
      temperature = (apiGravity - 32) * 5 / 9;
      resultDiv.innerHTML = `API Gravity: ${apiGravity.toFixed(2)}<br>Temperature: ${temperature.toFixed(2)} °C`;
    } else if (temperatureUnit === 'fahrenheit') {
      // Keep in Fahrenheit
      resultDiv.innerHTML = `API Gravity: ${apiGravity.toFixed(2)}<br>Temperature: ${apiGravity.toFixed(2)} °F`;
    } else if (temperatureUnit === 'kelvin') {
      // Convert to Kelvin
      temperature = (apiGravity - 32) * 5 / 9 + 273.15;
      resultDiv.innerHTML = `API Gravity: ${apiGravity.toFixed(2)}<br>Temperature: ${temperature.toFixed(2)} K`;
    }
  }