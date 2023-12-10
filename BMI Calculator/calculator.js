const calculateBmi = () =>{
    let results = document.querySelector('.results');
    let calculatorForm = document.querySelector('#calculatorForm');
    let submitButton = calculatorForm.querySelector('button');
    

    function calculator(height, weight){
        if(height >= 272 || height <= 57 ){
            alert('Please enter a valid value for your height between 57 to 272 cm');
        } else if(weight >= 400 || weight <= 20){
            alert("Please enter a valid value for your Weight between 20 to 240 kg");
        }else{
            let heightInMeter = height * 0.01;
            let bmi = weight / (heightInMeter * heightInMeter);
            let healthReport = (bmi.toFixed(2) < 18.5) ? "Under Weight": 
                               (bmi.toFixed(2) < 24.9 ) ? "Average Weight": "Over Weight"; 

            results.textContent= `${bmi.toFixed(2)} ${healthReport}`;
            console.log(bmi.toFixed(2));
        }
    }
    
    submitButton.addEventListener('click', () =>{
        let heightInput = calculatorForm.querySelector('#height').value;
        let weightInput = calculatorForm.querySelector('#weight').value;
        calculator(heightInput, weightInput)
    })
}
calculateBmi();
