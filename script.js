let calculateBtn = document.getElementById("btn");

calculateBtn.addEventListener("click", () => {
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById('result-text');
  const resultMessage = document.querySelector('.result-output');

  let heightStatus = false;
  let weightStatus = false;

  if(height === '' || isNaN(height) || (height <= 0)){
    document.getElementById('height-error').innerHTML = 'Please Provide a valid height';
  } else {
    document.getElementById('height-error').innerHTML = '';
    heightStatus = true;
  }

  if(weight === '' || isNaN(weight) || (weight <= 0)){
    document.getElementById('weight-error').innerHTML = 'Please Provide a valid weight';
  } else {
    document.getElementById('weight-error').innerHTML = '';
    weightStatus = true;
  }

  if(heightStatus && weightStatus){
    // Convert height to meters
    const heightInMeters = height / 100;

    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    console.log(bmi);

    if(bmi < 18.6){
        result.innerHTML = `Your BMI is : ${bmi}`;
        resultMessage.innerHTML = `(Under Weight)`
    } else if(bmi >= 18.6 && bmi < 24.9){
        result.innerHTML = `Your BMI is : ${bmi}`;
        resultMessage.innerHTML = `(Normal)`
    } else{
        result.innerHTML = `Your BMI is : ${bmi}`;
        resultMessage.innerHTML = `(Over Weight)`
    }
  } else{
    result.innerHTML = '';
  }
});