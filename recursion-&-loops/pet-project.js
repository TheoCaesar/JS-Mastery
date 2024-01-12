let counter =  1;
let numOfDivs = $('#container div').length;
function contentRotator(){
    $(`#container div:nth-child(${counter})`).fadeIn(2000, ()=>{
        if (counter == numOfDivs) {
        console.log("this is last child", $(this));
            setTimeout(() => {
                $(`#container div:nth-child(${counter})`).fadeOut(900, ()=>{
                    counter = 1;
                    contentRotator();
                })
            }, 2000);
        } else {
            console.log("current ", counter)
            setTimeout(() => {
                $(`#container div:nth-child(${counter})`).fadeOut(900, ()=>{
                    counter++;
                    contentRotator();
                })  
            }, 3000);
        }
    })
}

contentRotator()