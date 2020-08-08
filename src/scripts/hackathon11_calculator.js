const createRowButtons = (...values) => {
    let div = document.createElement("div");
    values.forEach((value) => {
        let button = document.createElement("button");
        button.innerHTML = value;
        button.addEventListener("click", (event) => {
            buttonClick(value);
        });
        if (value === "=") {
            button.classList.add("background-color-lightBlue");
        }
        else if (isNaN(Number(value)) === false) {
            button.classList.add("background-color-lightGray");
        }
        else {
            button.classList.add("background-color-darkGray");
        }
        div.appendChild(button);
        div.classList.add("divRow");
    });
    let divCalculator = document.getElementById("divCalculator");
    divCalculator.appendChild(div);
};
let IsNewOperation = false;
const buttonClick = (character) => {
    let screen_p = document.getElementById("screen_p");
    let screen_s = document.getElementById("screen_s");
    let error = "";
    switch (character) {
        case "=":
            try {
                screen_s.innerHTML = screen_p.innerHTML;
                screen_p.innerHTML = eval(screen_p.innerHTML);
                IsNewOperation = true;
            }
            catch (ex) {
                screen_p.innerHTML = "Error ...";
            }
            break;
        case "CL":
            screen_s.innerHTML = screen_p.innerHTML;
            screen_p.innerHTML = "";
            break;
        default:
            if (IsNewOperation && isNaN(Number(character)) === false) {
                screen_s.innerHTML = screen_p.innerHTML;
                screen_p.innerHTML = "";
            }
            IsNewOperation = false;
            screen_p.innerHTML += character;
            break;
    }
};
const createButtons = () => {
    createRowButtons("(", ")", "%", "CL");
    createRowButtons("7", "8", "9", "/");
    createRowButtons("4", "5", "6", "*");
    createRowButtons("1", "2", "3", "-");
    createRowButtons("0", ".", "=", "+");
};
/********************************************************************************************************** */
//# sourceMappingURL=hackathon11_calculator.js.map