// $("#tabs ul li a").click(function(){
//     $("#tabs ul li a").css({"color":"#cecece", "background":"#a2a2a2"})
//     $(this).css({"color":"#a2a2a2", "background":"#eaeaea"})
//     const val = $(this).attr("href")
//     // console.log($(val));

//     // $("#tabs div:visible").css({"display":"none"});
//     $("#tabs div:visible").fadeOut(1200);
//     // console.log($(`#tabs ${val}`));
//     // $(`#tabs ${val}`).css({"display":"block"})
//     $(`#tabs ${val}`).fadeIn(1400)
// })

//WITH JS   
linkTags = document.getElementsByTagName("a");
console.log(linkTags);

    for (let i = 0 ; i < linkTags.length; i++){
        let link = linkTags[i];
        var hrefAttr
        link.addEventListener("click", (e)=> {
            e.preventDefault();
            
            //switch tabs & styling
            for (let i = 0 ; i < linkTags.length; i++){
                let varlink = linkTags[i];
                varlink.style.color = "#cecece";
                varlink.style.background = "#a2a2a2";

                if (varlink === e.target) {               
                    varlink.style.color = "#a2a2a2";
                    varlink.style.background = "#eaeaea";
                }
            }; 

            hrefAttr = e.target.attributes.href.nodeValue;

            // show content
            allDivs = document.querySelectorAll(`#tabs div`);
            activeDiv = document.querySelector(`#tabs ${hrefAttr}`);

            // console.log("all", allDivs)
            allDivs.forEach(div => {
                (div != activeDiv) ? div.style.display = "none" : div.style.display = "block";
            });
        });
    };

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