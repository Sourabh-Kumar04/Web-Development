const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height*height/10000)).toFixed(2))
        // show the result
        // results.innerHTML = `<span>${bmi}</span>`

        let bmiMessage;
        if (results < 18.0) {
            bmiMessage = "You are underweight.";
        } else if (results >= 18.5 && bmi <= 24.9) {
            bmiMessage = "You are in the normal weight range."
        } else {
            bmiMessage = "You are overweight."
        }
        results.innerHTML = `<span>${bmi.toFixed(2)}</span> - ${bmiMessage}`
    }

});











