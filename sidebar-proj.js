(function(){
    "use strict";

    //hide submenus
    const menuELEMS= document.querySelectorAll(".menulink + ul");
    hideSubs(menuELEMS);

    //get each submenu instance
    const mainMenu = document.querySelectorAll(".menulink");
    console.log(mainMenu)
    for (let i = 0 ; i < mainMenu.length; i++){
        let menu = mainMenu[i];
        menu.addEventListener("click", (e)=>{
            e.preventDefault();

            // console.log(e.target)

            if (e.target.nextElementSibling.className == "show-menu") {
                // console.log('show')
                hideSubs(menuELEMS);
            } else {
                hideSubs(menuELEMS)
                e.target.nextElementSibling.className = "show-menu"          
            }
        })
    }
}   
)();




function hideSubs(mainMenu) {
    mainMenu.forEach(element => {
        element.className = "hide-menu";
    });
};

