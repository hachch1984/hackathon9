const collapsible = () => {
    let arrDivItem = document.getElementsByClassName("collapsible-item");
    Array.prototype.forEach.call(arrDivItem, (divItem) => {
        let divTitle = divItem.querySelector(".collapsible-title");
        let divText = divItem.querySelector(".collapsible-text");
        divText.classList.add("d-none");
        divTitle.onclick = () => {
            divText.classList.toggle("d-none");
        };
        let img = document.createElement("img");
        img.src = srcHandClosedFist;
        let strTitle = divTitle.innerHTML;
        divTitle.innerHTML = "";
        divTitle.append(img, strTitle);
        divTitle.onclick = () => {
            img.src = divText.classList.contains("d-none")
                ? "./images/handFingerDown.png"
                : "./images/handClosedFist.png";
            divText.classList.toggle("d-none");
        };
    });
};
collapsible();
//# sourceMappingURL=hackathon12_collapsible.js.map