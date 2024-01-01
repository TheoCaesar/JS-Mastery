submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    varSubmit = true;

    destName = document.getElementById("dest-name-input").value ;
    destLoc = document.getElementById("dest-loc-input").value ;
    destPhotoInputEl = document.getElementById("dest-photo-url-input");
    destPhoto = (destPhotoInputEl.value) ? destPhotoInputEl.value : "./images/img1.jfif"
    destDesc = document.getElementById("dest-desc-input").value ;
    

    //create img element
    imgEl = document.createElement("img");
    imgPathArr = destPhoto.split("/");
    imgName = destPhoto.split("/")[imgPathArr.length- 1];

    imgEl.src = destPhoto;    imgEl.alt = imgName;
    // console.log(imgEl);
    document.getElementById("wish-list-container").appendChild(imgEl);


    //fill wishlist card
    arr = [destName, destLoc, destDesc]
    arr.forEach((str)=>{
        const newEl = document.createElement("div");
        newEl.appendChild(document.createTextNode(str));
        document.getElementById("wish-list-container").appendChild(newEl);
    })
    
})
