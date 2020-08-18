const srcNoImage = "./images/noImage.png";
const srcHandClosedFist = "./images/handClosedFist.png";
const srcHandFingerDown = "./images/handFingerDown.png";

/************************************************************************************************************************************************************************** */
interface iDropDownData {
  title: string;
  arrSubTible?: iDropDownData[];
}

/************************************************************************************************************************************************************************** */
let dataDropDown: iDropDownData[] = [
  {
    title: "Option 1",
    arrSubTible: [
      { title: "Option 1-1" },
      { title: "Option 1-2" },
      { title: "Option 1-3" },
    ],
  },
  { title: "Option 2" },
  {
    title: "Option 3",
    arrSubTible: [
      { title: "Option 2-1" },
      {
        title: "Option 2-2",
        arrSubTible: [
          { title: "Option 2-2-1" },
          { title: "Option 2-2-2" },
          { title: "Option 2-2-3" },
        ],
      },
      {
        title: "Option 2-3",
        arrSubTible: [
          {
            title: "Option 2-3-1",
            arrSubTible: [
              {
                title: "Option 2-3-1-1",
                arrSubTible: [
                  { title: "Option 2-3-1-1-1" },
                  { title: "Option 2-3-1-1-2" },
                  { title: "Option 2-3-1-1-3" },
                ],
              },
              {
                title: "Option 2-3-1-2",
                arrSubTible: [
                  { title: "Option 2-3-1-2-1" },
                  { title: "Option 2-3-1-2-2" },
                  { title: "Option 2-3-1-2-3" },
                ],
              },

              {
                title: "Option 2-3-1-3",
                arrSubTible: [
                  { title: "Option 2-3-1-3-1" },
                  { title: "Option 2-3-1-3-2" },
                  { title: "Option 2-3-1-3-3" },
                ],
              },
            ],
          },
          {
            title: "Option 2-3-2",
            arrSubTible: [
              { title: "Option 2-3-2-1" },
              { title: "Option 2-3-2-2" },
              { title: "Option 2-3-2-3" },
            ],
          },
          {
            title: "Option 2-3-3",
            arrSubTible: [
              { title: "Option 2-3-3-1" },
              { title: "Option 2-3-3-2" },
              { title: "Option 2-3-3-3" },
            ],
          },
        ],
      },
    ],
  },
];

/************************************************************************************************************************************************************************** */

const clearSubLis = (ul: HTMLUListElement) => {
  ul.querySelector("ul")?.remove();
  ul.querySelectorAll(".img1").forEach(
    (obj: HTMLImageElement) => (obj.src = srcHandClosedFist)
  );
  ul.querySelectorAll(".img2").forEach(
    (obj: HTMLImageElement) => (obj.src = srcNoImage)
  );
};
/************************************************************************************************************************************************************************** */

const createList = (
  id: string,
  level: number,
  parent: HTMLUListElement | undefined,
  data: iDropDownData[]
): HTMLUListElement => {
  if (parent && parent.querySelector("#ul-" + id)) {
    return undefined;
  }

  let ul = document.createElement("ul");
  ul.id = "ul-" + id;

  data.forEach((obj, index) => {
    let li = document.createElement("li");
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let span = document.createElement("span");
    let a = document.createElement("a");

    img1.src = srcHandClosedFist;
    img1.classList.add("img1");
    img2.src = srcNoImage;
    img2.classList.add("img2");

    span.innerHTML = obj.title;

    a.append(img1, span, img2);

    a.onmouseenter = (event) => {
      clearSubLis(ul);

      img1.src = "./images/handOneFist.png";
      if (obj.arrSubTible && obj.arrSubTible.length != 0) {
        img2.src = "./images/handFingerRight.png";
        let auxUl = createList(id + index, level + 1, ul, obj.arrSubTible);
        if (auxUl) {
          auxUl.classList.add("dropDown-sub-list");
          auxUl.style.position = "fixed";

          auxUl.style.top =
            "calc(" + a.getBoundingClientRect().top + "px - 1.7rem)";
          console.log(level);
          auxUl.style.left =
            "calc(" +
            "10rem" +
            " + " +
            a.getBoundingClientRect().left +
            "px + 1.6rem)";

          ul.append(auxUl);
        }
      }
    };

    li.append(a);

    ul.append(li);
  });
  return ul;
};

/************************************************************************************************************************************************************************************************************* */

const dropDown = (controlText: string, controlId: string) => {
  let divDropDown = document.getElementById(controlId);

  let div = document.createElement("div");
  div.classList.add("dropDown-list");

  let ul = createList("0", 1, undefined, dataDropDown);
  ul.classList.add("d-none");

  let img = document.createElement("img");
  img.src = srcHandFingerDown;
  img.classList.add("primary-indicator");
  img.classList.toggle("d-none");

  let button = document.createElement("p");
  button.classList.add("dropDown-button");
  button.innerHTML = controlText;

  button.onclick = () => {
    ul.classList.toggle("d-none");
    img.classList.toggle("d-none");

    if (ul.classList.contains("d-none")) {
      clearSubLis(ul);
    }
  };

  div.append(img, ul);

  divDropDown.append(button);
  divDropDown.append(div);
};

 
 

/************************************************************************************************************************************************************************************************************* */
