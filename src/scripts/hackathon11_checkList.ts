let TaskCounter = 1;

const addTask = () => {
  let txtTask = document.getElementById("txtTask") as HTMLInputElement;
  if (txtTask.checkValidity()) {
    let html = `
    <li class="d-flex flex-row"> 
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="chk${TaskCounter}">
            <label class="form-check-label" id="lchk${TaskCounter}" for="chk${TaskCounter}">${txtTask.value}</label>
        </div>
    </li>
    `;

    let ul1 = document.getElementById("ul1") as HTMLLinkElement;
    ul1.insertAdjacentHTML("beforeend", html);

    let chk = document.getElementById("chk" + TaskCounter) as HTMLInputElement;
    chk.addEventListener("change", (event) => {
      let sender = event.currentTarget as HTMLInputElement;

      let lchk = document.getElementById("l" + sender.id) as HTMLLabelElement;

      lchk.style.textDecoration = sender.checked ? "line-through" : "none";
    });

    TaskCounter++;
    txtTask.value = "";
  } else {
    alert("you forgotten type the task");
    txtTask.focus();
  }
};
