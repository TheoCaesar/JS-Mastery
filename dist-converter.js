//1mile = 1.609 km
let userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const answerEl = document.getElementById("ans");

let userValue, ans;

// userValue = userInput.value;
userInput.addEventListener("keyup",(e)=>{
    e.preventDefault();

    answerEl.innerText=""
    if (e.which >= 48 && e.which <=57){
         userValue = Number(e.target.value)
    }
    console.log(userValue, e.which);

    if (typeof(userValue) != undefined && (userValue < 0 || typeof(userValue) != "number")){
        console.log("Please enter a valid number!");        
    } else {
        ans = userValue * 1.609;
        console.log(ans);        
    }
})

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    answerEl.innerText = `${userValue} miles is equivalent to ${ans} kilometers`;
     
})