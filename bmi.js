function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height)) {
        alert('Please enter valid numbers for weight and height.');
        return;
    }

    if (weight <= 0 || weight > 300) {
        alert('Please enter a valid weight (between 1 kg and 300 kg).');
        return;
    }

    if (height <= 0 || height > 250) {
        alert('Please enter a valid height (between 1 cm and 250 cm).');
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const resultDiv = document.getElementById('result');
    
    // Correct the use of quotes around HTML tags
    resultDiv.innerHTML = `<p>Your BMI is ${bmi.toFixed(2)}</p>`;
    
    if (bmi < 18.5) {
        resultDiv.innerHTML += '<p>You are underweight.</p>';
    } else if (bmi > 18.5 && bmi <= 24.9) {
        resultDiv.innerHTML += '<p>You have a normal weight.</p>';
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultDiv.innerHTML += '<p>You are overweight.</p>';
    } else {
        resultDiv.innerHTML += '<p>You are obese.</p>';
    }
}

