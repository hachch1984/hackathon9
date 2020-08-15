const collapsible = () => {
  let arrDivItem = document.getElementsByClassName("collapsible-item");

  Array.prototype.forEach.call(arrDivItem, (divItem: HTMLDivElement) => {
    let divTitle = divItem.querySelector(
      ".collapsible-title"
    ) as HTMLDivElement;
    let divText = divItem.querySelector(".collapsible-text") as HTMLDivElement;
    divText.classList.add("d-none");
    divTitle.onclick = () => {
      divText.classList.toggle("d-none");
    };
    let img = document.createElement("img") as HTMLImageElement;
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
