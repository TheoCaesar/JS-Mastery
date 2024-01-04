//hide/show
$("#hidebox").click(function(){
    $("#box1").hide(1800); //hide in 1.5s animation
})

$("#showbox").click(function(){
    $("#box1").show(1500);
})

$("#togglebox").click(function(){
    $("#box1").toggle(500, function(){console.log("done!");}); //not working
})

//slide up/down
$("#slideUpbox").click(function(){
    $("#box2").slideUp("slow"); //hide in 1.5s animation
})

$("#slideDownbox").click(function(){
    $("#box2").slideDown("1800", 'fast');
})

$("#slidetogglebox").click(function(){
    $("#box2").slideToggle("500", "slow"); //not working
})

//fadeIn & out
$("#fadeOutbox").click(function(){
    $("#box3").fadeOut("2800");
});

$("#fadeInbox").click(function(){
    $("#box3").fadeIn("1000"); //hide in 1.5s animation
});

$("#fadeOutTobox").click(function(){
    $("#box3").fadeTo("500",'0.2'); //not working
})

$("#fadeInTobox").click(function(){
    $("#box3").fadeTo("500",'0.5'); //not working
})

//Custom animationns
$("#growbox").click(function(){
    $("#box4").animate({"width": "400px" },"2800");
});

$("#growtext").click(function(){
   $("#box4").animate({"font-size":"32px"}, "1000"); //hide in 1.5s animation
   // $("#box4").animate({"background-color":"white"}, "1000")
});

$("#movebox").click(function(){
   $("#box4").animate({"left":"+=400px"},"1800"); //not working till we add the left prop in our css
   console.log("moving")
})

$("#sequence").click(function(){
   $("#box4").animate({"width": "400px" },"2800", function(){
       $("#box4").animate({"font-size":"32px"}, "1000", function() {
           $("#box4").animate({"left":"+=400px"},"1800");
       })
   }); //not working
});

//do it all at once
$("#doall").click(function(){
   $("#box4").animate({"width": "400px", "font-size":"32px", "left":"+=400px"},"2800"); 
});