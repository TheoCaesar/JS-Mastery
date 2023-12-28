(function(){
    console.log("yipee ki yay ")
    "use strict"
    const nxtBtn = document.querySelector(".nxt");
    const prevBtn = document.querySelector(".prev");
    

    const imgs = ["img1.jfif", "img2.jfif", "img3.jfif", "img4.jfif", "img5.jfif", "img6.jfif"];
    const imgEl = document.querySelector(".image").children[0];
    let imgSrcAttr = imgEl.attributes[0];
    let currentImgArrPath = imgSrcAttr.nodeValue.split(["/",]);
    let currentImg = currentImgArrPath[currentImgArrPath.length - 1];
    console.log(typeof(currentImg));

    let imgIndex = imgs.indexOf(currentImg);
    console.log(imgIndex);

    nxtBtn.addEventListener("click", (e)=>{
        e.preventDefault() 
        imgEl.className='fadeInImg'
        if (imgIndex >= imgs.length-1) {
            imgIndex = 0;
            imgSrcAttr.textContent =`./images/${imgs[imgIndex]}`;
        } else imgSrcAttr.textContent =`./images/${imgs[++imgIndex]}`;
        // imgEl.className = " "
    })

    prevBtn.addEventListener("click", (e)=>{
        e.preventDefault()
        document.getElementsByName("img").className = "fadeIn"

        if (imgIndex === 0) {
            imgIndex = 5;
            imgSrcAttr.textContent =`./images/${imgs[imgIndex]}`;
        } else imgSrcAttr.textContent =`./images/${imgs[--imgIndex]}`;
 
    })

})();

