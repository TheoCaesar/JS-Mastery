$(window).on("load", ()=>{

    "use strict "
    const numOfImgs = $("#slider ul li").length;
    // const imgWidth = $("#slider ul li:first img").width() //works - deprecated
    const imgWidth = $("#slider ul li img").first().width() //works
    console.log(imgWidth, numOfImgs);  

    const totalWidth = (imgWidth * numOfImgs);
    console.log(totalWidth)

    let leftPosition = 0;
    let counter = 0;

    $("#slider ul").css("width", totalWidth);

    $("#next").on("click",()=>{
        counter++;
        if (counter == numOfImgs) {
            counter = 0;
        }
        leftPosition = `-${counter*imgWidth}px`;
        
        $("#slider ul").animate({"left":leftPosition}, (counter == 0) ? 0 : 500);
    })

    $("#prev").on("click",()=>{
        counter--;
        if (counter < 0) {
            counter = numOfImgs-1;
        }
        leftPosition = `-${counter*imgWidth}px`;
        
        $("#slider ul").animate({"left":leftPosition}, (counter == numOfImgs - 1) ? 0 : 2500);
    })
});
