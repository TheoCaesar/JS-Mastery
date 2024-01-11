(function(){
    "use strict";

    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", (e)=> {
        e.preventDefault();

        const ansEl = document.getElementById("ans");
        let userInput = Number(document.getElementById("userInput").value);
        // console.log(userInput)
        if (userInput) {
            let distanceKm = (userInput * 1.609).toFixed(3);      
            ansEl.innerText = `${userInput} miles is equivalent to ${distanceKm} kilometers`
        } else {
            ansEl.innerText = `Please enter a valid number!`
        }
    })
})();