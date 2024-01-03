// $("ul li ul").hide();
$(".menulink").click(function(){
    const clickedMenu = $(this).next("ul");
    $("ul li ul").not(clickedMenu).hide();
    
    clickedMenu.toggle();
});
