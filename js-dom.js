/**
 * DOM Methods & Properties
 * NB: Methods are basically functions with args while props aren't. 
 */

/** Methods  */
//getElementsById() - returns an instance of element with stated id;
var head = document.getElementById("heading");
head.style.color = "red";

//getElementsByTagName() - returns a collection (array) of elements
var ptags = document.getElementsByTagName("p")
console.log(ptags.length)
colours = ['green', "yellow", "mauve", "blue", "orange"]

for (let ptag of ptags) {
    console.log(ptag.innerText)
    ptag.style.color = colours[Math.floor(Math.random() * colours.length)];
}


//getElementsByClassName() - returns a collection (array) of elements
currentChapter = document.getElementsByClassName("current");
newInnerText = currentChapter[currentChapter.length-1].innerText.toUpperCase()
currentChapter[currentChapter.length-1].innerText = newInnerText;


//querySelector() - based on Jquery, returns only the first instance with arg
var head2 = document.querySelector("#heading");
head2.innerText = head2.innerText.toUpperCase();

var current2 = document.querySelector(".current")
current2.innerText += " - altered via query selector"

//querySelectorAll() - returns all instances  matching argument
ptags = document.querySelectorAll("p");
ptags.forEach(p => {
    p.style.color = "yellow";
    p.style.background = "black"
})


/** Properties */
// innerHTML
var heading = document.getElementById("heading");
var newHtml = "<i>Working with DOM methods & props now</i>"
heading.innerHTML = newHtml;

//className 
heading.className = "blue-on-orange"

//setAttribute 
var anchor = document.querySelector("a");
anchor.setAttribute("href", "./structured-prog.js")
anchor.innerText = "Link to structured prog files..."


//advanced methods 
// createElementNode - advanced version of innerHTML.

var newP = document.createElement("p");
var newPsTxt = document.createTextNode("Now adding sh*t to webpage from JS");
newP.appendChild(newPsTxt);

//-add new paragraph to body
document.querySelector("body").appendChild(newP);


// removeChild()
var lastElement = document.querySelector("body").lastChild

setTimeout(() => {
    alert("About to remove last element in webpage, Are you Ready???");
    // var lastElement = document.querySelector("body").lastChild
    document.getElementsByTagName("body")[0].removeChild(lastElement);
}, 3000);

setTimeout(()=>{
    selfDestruct();
}, 2500)


selfDestruct = () => {
    btn = document.createElement("button");
    btn_txt = document.createTextNode("remove last line in webpage")
    btn.appendChild(btn_txt);

    document.querySelector("body").appendChild(btn)

    btn.setAttribute("onClick", "kaboom()");
}


kaboom = function () {

    children = document.querySelector("body").children;

    //last child b4 self destruct button & script tag
    if (children.length >2 ) {
    var lastchild = children[children.length - 3];
    console.log(lastchild, "\nchildren =>" + children.length)
    document.querySelector("body").removeChild(lastchild)

    } else {
        console.log("nothing left to delete")
        document.querySelector("button").disabled =true

    }
}

bodyEl = document.querySelector("body")

//Event Listeners: addEventListener() - helps add numerous event listeners on htm prop
newbtn = document.createElement("button")
newbtntxt = document.createTextNode("Trigger Event");
newbtn.appendChild(newbtntxt);
bodyEl.appendChild(newbtn);

newbtn.setAttribute("id", "eventBtn");
newbtn.addEventListener("click", ()=> {
    bodyEl.style.background = colours[Math.floor(Math.random() * colours.length)];
}, "mouseenter", ()=>{
    newbtn.style.background = colours[Math.floor(Math.random() * colours.length)];
})

eventBtn = document.getElementById("eventBtn");

