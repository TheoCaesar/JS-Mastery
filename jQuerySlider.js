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
            $("#slider ul").clone().appendTo("#slider");
            $("#slider ul").last().css("left", `${imgWidth}px `)

            leftPosition = `${totalWidth}`;

            $("#slider ul").last().animate({left:0}, 700)
            $("#slider ul").first().animate({left:leftPosition}, 700, ()=> {
                $("#slider ul").first().remove();
            })

            counter = 0;
        } else {
            leftPosition = `-${counter*imgWidth}px`;
            
            $("#slider ul").animate({"left":leftPosition}, 500);
        }
    })

    $("#prev").on("click",()=>{
        counter--;
        if (counter < 0) {
            counter = numOfImgs-1;

            $("#slider ul").clone().appendTo("#slider");
            $("#slider ul").last().css("left", `-${totalWidth}`)

            leftPosition = `-${counter*imgWidth}`;

            $("#slider ul").last().animate({left:leftPosition}, 700);
            $("#slider ul").first().animate({left:imgWidth+"px"}, 700, ()=> {
                $("#slider ul").first().remove();
            })
        } else {
            leftPosition = `-${counter*imgWidth}px`;
            
            $("#slider ul").animate({"left":leftPosition},  500);
        }
    })
});
