const frmNewCard = document.getElementById("frmNewCard") as HTMLDivElement;
const frmEditCard = document.getElementById("frmEditCard") as HTMLDivElement;
const frmDeleteCard = document.getElementById(
  "frmDeleteCard"
) as HTMLDivElement;
const tbNewName = document.getElementById("tbNewName") as HTMLInputElement;

const cards = document.getElementById("cards") as HTMLInputElement;

const tbEditName = document.getElementById("tbEditName") as HTMLInputElement;

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

let IdCounter = 1;

const btnNewCard_add = async () => {
  frmNewCard_toggle();
  //https://picsum.photos/200/300?random=${DivIdCount}
  let div = document.createElement("div") as HTMLDivElement;
  div.className = "card";
  div.id = "div" + IdCounter;
  div.innerHTML = `   
        <div class="d-flex justify-content-between">
            <img class="control-image" src="./images/edit.png" alt="" onclick="bnEdit('div${IdCounter}')">
            <img class="control-image" src="./images/close.png" alt="" onclick="bnDelete('div${IdCounter}')">
        </div>
        <div class="d-flex justify-content-center">
            <img  id='img${IdCounter}' src="./images/gifLoading1.gif?${Math.random}" alt="">
        </div>
        <div class="card-body d-flex flex-column align-items-center">
            <h5 class="card-title">${tbNewName.value}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p> 
        </div>
    `;
  cards.appendChild(div);
  tbNewName.value = "";

  let id = IdCounter;

  IdCounter++;

  let img = document.getElementById(`img${id}`) as HTMLImageElement;
  let response = await fetch(`https://picsum.photos/200/300?random=${id}`);
  let data = await response.blob();

  img.src = URL.createObjectURL(data);
};

const bnDelete = (id: string) => {
  frmDeleteCard_toggle();

  let div = document.getElementById(id) as HTMLDivElement;
  let h5 = div.querySelector("h5") as HTMLHRElement;
  frmDeleteCard.querySelector(
    "p"
  ).innerHTML = `Esta segura(o) de eliminar la tarjeta: <h6>${h5.innerHTML}</h6>`;

  document.getElementById("btnDeleteCard_delete").onclick = () => {
    cards.removeChild(div);
    frmDeleteCard_toggle();
  };
};
const bnEdit = (id: string) => {
  let div = document.getElementById(id) as HTMLDivElement;
  let tb = div.querySelector("h5") as HTMLHRElement;

  let frm = document.getElementById("frmEditCard") as HTMLDivElement;

  frm.classList.toggle("modal-background");
  frm.classList.toggle("d-none");

  tbEditName.value = tb.innerHTML;

  let btnEditCard = document.getElementById(
    "btnEditCard_save"
  ) as HTMLButtonElement;
  btnEditCard.onclick = () => {
    tb.innerHTML = tbEditName.value;
    frmEditCard_toggle();
  };
};

const btnEditCard_close = () => {
  frmEditCard_toggle();
  tbEditName.value = "";
};

const btnEditCard_save = (id: string) => {
  frmEditCard_toggle();

  tbEditName.value = "";
};

const btnDeleteCard_close = () => {
  let frm = document.getElementById("frmDeleteCard") as HTMLDivElement;

  frm.classList.toggle("modal-background");
  frm.classList.toggle("d-none");
};
