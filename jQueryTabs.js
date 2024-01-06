$("#tabs ul li a").click(function(){
    $("#tabs ul li a").css({"color":"#cecece", "background":"#a2a2a2"})
    $(this).css({"color":"#a2a2a2", "background":"#eaeaea"})
    const val = $(this).attr("href")
    // console.log($(val));

    // $("#tabs div:visible").css({"display":"none"});
    $("#tabs div:visible").fadeOut(1200);
    // console.log($(`#tabs ${val}`));
    // $(`#tabs ${val}`).css({"display":"block"})
    $(`#tabs ${val}`).fadeIn(1400)
})




//get corresponding block out of all div blocks



    // $("div#tabs > ul > li > a").click(function(){
    //     const allTabs = $("div#tabs > ul a");
    //     const activeTab = $(this); //element triggering click event

    //     allTabs.css({"color":"#cecece", "background": "#a2a2a2"});
    //     activeTab.css({"color":"#a2a2a2", "background":"#eaeaea"})
    //     const activeLink = activeTab.attr("href");
       
    //    console.log(activeLink);
    //    allDivs = $("#tabs > div")
    //    allDivs.css({"display":"none"});
    // //    $("#tabs > div:visible").css
    //    $(`#div-${activeLink}`).css({"display":"block"})
    // }); 