(function(){
    "use strict"
    const formEl = document.querySelector("#wish-dest");
    formEl.addEventListener("submit", handleFormSubmit);//notice diff in fxn call

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("submit fired!")

        const destName = event.target.elements['destination-name'].value;
        const destLoc = event.target.elements['destination-loc'].value;
        const destImg = event.target.elements['destination-photo'].value;
        const destDesc = event.target.elements['destination-desc'].value;

        // console.log(event.target.elements);
        let destCard = createDestinationCard(destName, destLoc, destImg, destDesc)

        //insert dest card
        const wishContEl = document.getElementById('wish-list-container');

        if (wishContEl.children) {
            document.getElementById("wish-list-heading").innerText = "My Wish List";
        }

        // wishContEl.appendChild(destCard);
        document.getElementById("wish-list-container").appendChild(destCard);
        clearForm(event);
    }

    function createDestinationCard(name, loc, imgURL, desc){
        //create card container
        const card = document.createElement('div');
        card.className = 'dest-info';

        //img element
        const img = document.createElement("img");
        const defaultImg = 
        img.setAttribute("alt", name);
        img.setAttribute("src",
        (imgURL.length === 0) ? "./images/img1.jfif" : imgURL
        )

        card.appendChild(img)

        let cardBody = document.createElement("div");
        cardBody.className = 'card-body';

        //name
        let cardTitle = document.createElement("h4");
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle)

        //lcoation
        let cardSubtitle = document.createElement("h5");
        cardSubtitle.innerText = loc;
        cardBody.appendChild(cardSubtitle);

        //description
        if (desc.length > 0){
        let cardDesc = document.createElement("p")
        // card.appendChild(img);
        cardDesc.className = 'card-text';
        cardDesc.innerText = desc;
        cardBody.appendChild(cardDesc);  
        }

        //removeBtn
        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.addEventListener('click', removeDestination);
        cardBody.appendChild(removeBtn)

        card.appendChild(cardBody);
        return card;
    }

    function removeDestination(e){
        e.preventDefault();
        const destCard = e.target.parentElement.parentElement;
        destCard.remove();
    }

    function clearForm(e){
        e.preventDefault();
        const formInputsCount = e.target.elements.length-1;

        for (let i = 0 ; i < formInputsCount; i++){
            e.target.elements[i].value = ""
        }
    }
})();