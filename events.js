//mouse events
changeColor = function () {
    colours = ['green', "yellow", "mauve", "blue", "orange"]
    return colours[Math.floor(Math.random()*colours.length)];
}
var uname = document.querySelector("input");
uname.addEventListener("mouseover", (e) => {
    console.log("About to enter username")
})

uname.addEventListener("mouseout", function() {
    console.log("Exiting username field")
})

//scroll events - very costly in terms of memory usage
scrollBox = document.getElementById("scroll-container");
scrollBox.addEventListener("scroll", (event)=> {
    event.target.children[0].style.background = changeColor();
})

//keydown event
document.getElementById("guess-key").addEventListener("keydown", (e)=> {
    document.querySelector("#response").textContent = `You keyed in ${e.key}, with ASCII of ${e.which}`;
})