let btnShowModal = document.getElementById("btnShowModal");
let btnClose = document.getElementById("btnClose");
const toggle = () => {
    let divModalBackground = document.querySelector(".modal-background");
    divModalBackground.classList.toggle("d-none");
};
btnClose.onclick = () => {
    toggle();
};
btnShowModal.onclick = () => {
    toggle();
};
toggle();
//# sourceMappingURL=hackathon12_modalForm.js.map