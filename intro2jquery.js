(window.jQuery) ? console.log("Jquery is here") : console.log("sorry! Try again");
jQuery("#main").css("border", "2px solid red");
$(".special").css("color", "red");
$("a").css("text-decoration", "28px");
$("h2, p").css("font-family", "verdana");
$("ol li:even").css("color", "green");
$("li:has(ul)").css("list-style-type", "square");
$("li:contains(three)").css("font-size", "28px");

//jquery & event listeners
$("a").click((e)=>{
    console.log(e.target.innerText);
})