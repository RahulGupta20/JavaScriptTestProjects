/*

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results')
    const resulta = document.querySelector('#resultsa')

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        //show the result
        result.innerHTML = `<span>${bmi}</span>`

        // if (bmi < 18.6) {
        //     resulta.innerHTML = `Under weight`
        // } else if (bmi > 18.6 && bmi < 24.9 ) {
        //     resulta.innerHTML = `Normal Range`
        // } else if (bmi > 24.9) {
        //     resulta.innerHTML = `Over weight`
        // }

        if(bmi<18.6){
            result.innerHTML=`<span>Under weigth :${bmi}</span>`;
            }else if(bmi>18.6 && bmi<24.9){
                result.textContent=`Normal Weight:${bmi}`;
            }else{
                result.textContent=`Over Weight : ${bmi}`
            }
    
    
    }

    
    
}) 


*/




const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    // console.log(height)

    if(height < 0 || isNaN(height || height === '')) {
        result.innerHTML = `Please enter a valid ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid ${weight}`
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `${bmi}`;

        if(bmi < 18.6) {
            result.innerHTML = `Under Weight: ${bmi}`
        } 
        else if(bmi > 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal Range: ${bmi}`
        }
        else if(bmi > 24.9) {
            result.innerHTML = `Over Weight: ${bmi}`
        }
    }
    
})