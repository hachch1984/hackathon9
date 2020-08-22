const frmNewCard = document.getElementById("frmNewCard");
const frmEditCard = document.getElementById("frmEditCard");
const frmDeleteCard = document.getElementById("frmDeleteCard");
const tbNewName = document.getElementById("tbNewName");
const cards = document.getElementById("cards");
const tbEditName = document.getElementById("tbEditName");
const frmNewCard_toggle = () => {
    frmNewCard.classList.toggle("modal-background");
    frmNewCard.classList.toggle("d-none");
};
const frmEditCard_toggle = () => {
    frmEditCard.classList.toggle("modal-background");
    frmEditCard.classList.toggle("d-none");
};
const frmDeleteCard_toggle = () => {
    frmDeleteCard.classList.toggle("modal-background");
    frmDeleteCard.classList.toggle("d-none");
};
const bnAddCard = () => {
    frmNewCard_toggle();
};
const btnNewCard_close = () => {
    frmNewCard_toggle();
    tbNewName.value = "";
};
let DivIdCount = 1;
const btnNewCard_add = () => {
    frmNewCard_toggle();
    let div = document.createElement("div");
    div.className = "card";
    div.id = "div" + DivIdCount;
    div.innerHTML = `   
        <div class="d-flex justify-content-between">
            <img class="control-image" src="./images/edit.png" alt="" onclick="bnEdit('div${DivIdCount}')">
            <img class="control-image" src="./images/close.png" alt="" onclick="bnDelete('div${DivIdCount}')">
        </div>
        <div class="d-flex justify-content-center">
            <img class="" src="https://picsum.photos/200/300?random=${DivIdCount}" alt="">
        </div>
        <div class="card-body d-flex flex-column align-items-center">
            <h5 class="card-title">${tbNewName.value}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p> 
        </div>
    `;
    cards.appendChild(div);
    tbNewName.value = "";
    DivIdCount++;
};
const bnDelete = (id) => {
    frmDeleteCard_toggle();
    let div = document.getElementById(id);
    let h5 = div.querySelector("h5");
    frmDeleteCard.querySelector("p").innerHTML = `Esta segura(o) de eliminar la tarjeta: <h6>${h5.innerHTML}</h6>`;
    document.getElementById("btnDeleteCard_delete").onclick = () => {
        cards.removeChild(div);
        frmDeleteCard_toggle();
    };
};
const bnEdit = (id) => {
    let div = document.getElementById(id);
    let tb = div.querySelector("h5");
    let frm = document.getElementById("frmEditCard");
    frm.classList.toggle("modal-background");
    frm.classList.toggle("d-none");
    tbEditName.value = tb.innerHTML;
    let btnEditCard = document.getElementById("btnEditCard_save");
    btnEditCard.onclick = () => {
        tb.innerHTML = tbEditName.value;
        frmEditCard_toggle();
    };
};
const btnEditCard_close = () => {
    frmEditCard_toggle();
    tbEditName.value = "";
};
const btnEditCard_save = (id) => {
    frmEditCard_toggle();
    tbEditName.value = "";
};
const btnDeleteCard_close = () => {
    let frm = document.getElementById("frmDeleteCard");
    frm.classList.toggle("modal-background");
    frm.classList.toggle("d-none");
};
//# sourceMappingURL=hackathon13.js.map