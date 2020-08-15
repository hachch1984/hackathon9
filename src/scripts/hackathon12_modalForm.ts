let btnShowModal = document.getElementById("btnShowModal") as HTMLButtonElement;

let btnClose = document.getElementById("btnClose") as HTMLButtonElement;

const toggle = () => {
  let divModalBackground = document.querySelector(
    ".modal-background"
  ) as HTMLDivElement;
  divModalBackground.classList.toggle("d-none");
};

btnClose.onclick = () => {
  toggle();
};

btnShowModal.onclick = () => {
  toggle();
};

toggle();
