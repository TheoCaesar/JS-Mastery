submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    destName = document.getElementById("dest-name-input").value ;
    destLoc = document.getElementById("dest-loc-input").value ;
    destPhotoInputEl = document.getElementById("dest-photo-url-input");
    destPhoto = (destPhotoInputEl.value) ? destPhotoInputEl.value : "./images/img1.jfif"
    destDesc = document.getElementById("dest-desc-input").value ;
    

    //create img element
    imgEl = document.createElement("img");
    srcAttr = document.createAttribute("src");
    altAttr = document.createAttribute("alt");
    srcAttr = destPhoto;
    imgPathArr = destPhoto.split("/");
    imgName = destPhoto.split("/")[imgPathArr.length- 1];

    imgEl.src = srcAttr;
    imgEl.alt = imgName;
    console.log(imgEl);

    //fill wishlist card
    arr = [destName, destLoc, destDesc]
    arr.forEach((str)=>{
        const newEl = document.createElement("div");
        newEl.appendChild(document.createTextNode(str));
        document.getElementsByClassName("dest-info")[0].appendChild(newEl);
    })
    
})
