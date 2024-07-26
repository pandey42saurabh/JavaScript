const form= document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results= document.querySelector('#results');
    const uw = document.querySelector(".under-weight");
    const nr = document.querySelector(".normal-range");
    const ow = document.querySelector(".over-weight")
    function refresh(){
        window.location.reload ();
    }

    if(height ==='' || height <=0 || isNaN(height)){
        results.innerHTML =`please provide valid height ${height}`;
    }
    // 
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
      } 
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `${bmi}`;
        if(bmi<18.6){
            // console.log("under weight");
            uw.innerHTML= "Under weight"
            
        }else if (bmi >=18.6 && bmi <24.9){
            console.log("Normal weight");
            nr.innerHTML = "Normal Weight"
        } else{
            console.log("over weight");
            ow.innerHTML="Over Weight"
        }
    }

    refresh();
})




