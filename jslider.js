window.addEventListener("load", () => {
    //how many slides?
    const slideCount = document.getElementsByTagName("li").length;
    
    //how wide is each slide?
    const slideWidth = document.querySelector("#slider-wrapper").offsetWidth;

    //total width of slider?
    const totalWidth = `${slideCount * slideWidth}px`;

    //get slider DOM element
    const sliderEl = document.querySelector("#slider-wrapper ul");
    const nxtEl = document.querySelector("#nxt");
    const prevEl = document.querySelector("#prev");

    //nxt btn
    console.log(slideCount, slideWidth, totalWidth);

    let leftPosition = 0; 
    let counter = 0; 
    
    sliderEl.style.width = totalWidth;

    nxtEl.addEventListener("click", function (e) {
        e.preventDefault();
        console.log('CLICK')

        counter++;

        if (counter == slideCount) {
            counter = 0;
            leftPosition = 0;
            sliderEl.style.left = leftPosition
        } else {
            leftPosition = `-${counter * slideWidth}px`;
            sliderEl.style.left = leftPosition;
        }
    })

    prevEl.addEventListener("click", function (e) {
        e.preventDefault();
        console.log('CLICK')

        counter--;

        if (counter < 0) {
            counter = slideCount -1;
            leftPosition = `-${counter * slideWidth}px`;
            sliderEl.style.left = leftPosition;
        } else {
            leftPosition = `-${counter * slideWidth}px`;
            sliderEl.style.left = leftPosition;
        }
    })

})