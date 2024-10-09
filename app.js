function calculateAPI() {
  const specificGravity = parseFloat(document.getElementById('specificGravity').value);
  const resultDiv = document.getElementById('result');

  if (!specificGravity || specificGravity <= 0) {
      resultDiv.innerHTML = "Please enter a valid specific gravity.";
      return;
  }

  // Calculate API gravity
  const apiGravity = 141.5 / specificGravity - 131.5;

  // Determine crude type based on API gravity
  let crudeType = '';
  if (apiGravity > 31.1) {
      crudeType = 'Lighter Crude';
  } else if (apiGravity > 23.1 && apiGravity <= 31.1) {
      crudeType = 'Medium Crude';
  } else if (apiGravity > 10 && apiGravity <= 23.1) {
      crudeType = 'Heavier Crude';
  } else {
      crudeType = 'Extra Heavy Crude';
  }

  // Display result
  resultDiv.innerHTML = `API Gravity: ${apiGravity.toFixed(2)}<br>Crude Type: ${crudeType}`;
}
