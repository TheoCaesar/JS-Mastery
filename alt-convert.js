const switchBtn = document.getElementById("switch");
const submitBtn = document.getElementById('submitBtn');
const headingEl = document.getElementsByTagName("h1")[0];
const introEl = document.querySelector("#intro");
const userInput = document.getElementById("userInput");
const ansEl = document.getElementById("ans");

let toKm = true;

//make switch
switchBtn.addEventListener('click', (e)=> {
    e.preventDefault()

    //toggle conversion mode and string
    toKm = !toKm;
    if (toKm) {
    headingEl.innerText = "Miles to Kilometers Converter";
    introEl.innerText = "Enter the number of miles and click the button to convert the distance to kilometers";
    } else {
        headingEl.innerText = "Kilometers to Miles Converter";
        introEl.innerText = "Enter the number of kilometers and click the button to convert the distance to miles";    
    }
    ansEl.innerText = ""
    userInput.value = ""

})

//perform conversion
submitBtn.addEventListener('click', function(e){
    e.preventDefault();

    let distance = parseFloat(userInput.value);
    let convDist;
    if (distance){
        convDist = (toKm) ? (distance*1.609).toFixed(3) : (distance/1.609).toFixed(3);
        let output = (toKm) ? `${distance} miles equals ${convDist} kilometers` : `${distance} kilometers equals ${convDist} miles`;
        ansEl.innerText = output;
    } else {
        ansEl.innerText = "Please enter a valid number!"
    }
})