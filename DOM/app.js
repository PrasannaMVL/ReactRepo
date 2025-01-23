function calculateBMI() {
    let height = document.getElementById('height')
    // let heightResult = height.value
    // heightResult= ''
    // console.log(heightResult)

    let weight = document.getElementById('weight')
    // let weightResult = weight.value
    // weightResult = ''
    // console.log(heightResult, weightResult)

    
    let bmiResult = (weight / (height * height))
    console.log('BMI Result', bmiResult)
    let title = document.getElementById('bmiRange')
    
    if(bmiResult < 18.5) {
        title.innerText = 'Under weight'
    }
    else if(bmiResult >18.5 && bmiResult < 24.9){
        title.innerText = 'Normal weight'
    }
    else if(bmiResult > 25 && bmiResult < 29.9){
        title.innerText = 'Overweight'
    }
    else if(bmiResult > 30 && bmiResult < 35){
        title.innerText = 'Obesity'
    }
    else {
        title.innerText = 'Severe obesity'
    }
}