$("#hidebox").click(function(){
    $("#box1").hide(1800); //hide in 1.5s animation
})

$("#showbox").click(function(){
    $("#box1").show(1500);
})

$("#togglebox").click(function(){
    $("#box1").toggle(500, function(){console.log("done!");}); //not working
})