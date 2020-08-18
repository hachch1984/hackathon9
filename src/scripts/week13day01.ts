let skip = 0;
let take = 28;

const bnPrevious = () => {
  generalRequest(false);
};

const bnNext = () => {
  generalRequest(true);
};

const showLoading = (show: boolean) => {
  let img = document.getElementById("img") as HTMLImageElement;
  img.src = show ? "./images/gifLoading1.gif" : "./images/noImage.png";
};

interface iObject1 {
  name: string;
  url: string;
}
interface iObject2 {
    sprites: { front_default: string };
}
const generalRequest = (next: boolean) => {
  if (next === false && skip < 0) {
    return;
  }

  showLoading(true);

  let ul = document.getElementById("ul") as HTMLUListElement;

  ul.innerHTML = "";

  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://pokeapi.co/api/v2/pokemon?limit=${take}&offset=${skip + 1}`
  );
  xhr.send();

  xhr.onload = function () {
    if (xhr.status == 200) {
      let data = JSON.parse(xhr.response).results as iObject1[];
      data.forEach((obj) => {
        let li = document.createElement("li");
        let p = document.createElement("p");
        let img = document.createElement("img");
        p.innerHTML = obj.name;
        li.append(p, img);
      
        ul.append(li);

        let xhr2 = new XMLHttpRequest();
        xhr2.open("GET", obj.url);
        xhr2.send();
        xhr2.onload = function () {
          let data2 = JSON.parse(xhr2.response) as iObject2  ;
        
       
    img.src= data2.sprites.front_default
    };
      });
    }
  };

  if (next) skip += take;
  else {
    skip -= take;
  }

  showLoading(false);

  console.log(skip);
};

generalRequest(true);
