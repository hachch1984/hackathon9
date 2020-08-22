let skip = 0;
let take = 28;

const bnPrevious = () => {
  generalRequest(false);
};

const bnNext = () => {
  generalRequest(true);
};

interface iObject1 {
  name: string;
  url: string;
}
interface iObject2 {
  sprites: { front_default: string };
}

const getSrcNoImage = () => {
  return;
};
const showLoading = (show: boolean) => {
  let img = document.getElementById("img") as HTMLImageElement;
  img.src = show
    ? "./images/gifLoading1.gif?" + Math.random()
    : "./images/noImage.png";
};


const generalRequest = async (next: boolean) => {
  console.log('start',new Date)
  if (next === false && skip < 0) {
    return;
  }
   

  let ul = document.getElementById("ul") as HTMLUListElement;
  ul.innerHTML =  "";
 

  let response1 = await fetch( `https://pokeapi.co/api/v2/pokemon?limit=${take}&offset=${skip + 1}`);
  let data1 = await response1.json();

  let arrPokemon = data1.results as iObject1[];  
  for (const objPokemon of arrPokemon)
  {
    let li = document.createElement("li");
    let p = document.createElement("p");
    let img = document.createElement("img");
    img.style.width = "80px";
    img.style.height = "80px";
    img.src = "./images/gifLoading1.gif?" + Math.random();
    p.innerHTML = objPokemon.name;
    li.append(p, img);
    ul.append(li);

    let response2 = await fetch(objPokemon.url);
    let data2 = await response2.json();
    let objImagen = data2 as iObject2;
    img.src = objImagen.sprites.front_default;
  }


  if (next) {
    skip += take;
  } else {
    skip -= take;
  }

  showLoading(false);
   
};

generalRequest(true);





/*

const generalRequest = (next: boolean) => {
  console.log("start", new Date());

  if (next === false && skip < 0) {
    return;
  }

  new Promise((resolve, reject) => {
    showLoading(true);

    let ul = document.getElementById("ul") as HTMLUListElement;
    ul.innerHTML = "";
    let cont = 0;
    new Promise((resolvePokemon, rejectPokemon) => {
      fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${take}&offset=${skip + 1}`
      )
        .then((response) => response.json())
        .then((data) => {
          let arr = data.results as iObject1[];
          arr.forEach((obj) => {
            let li = document.createElement("li");
            let p = document.createElement("p");
            let img = document.createElement("img");
            img.style.width = "80px";
            img.style.height = "80px";
            img.src = "./images/gifLoading1.gif?" + Math.random();
            p.innerHTML = obj.name;
            li.append(p, img);
            ul.append(li);

            new Promise((resolveImage, rejectImage) => {
              fetch(obj.url)
                .then((response) => response.json())
                .then((obj: iObject2) => {
                  resolveImage(obj.sprites.front_default);
                });
            }).then((response: string) => {
              img.src = response;
              cont++;
              if (cont === take) {
                resolvePokemon(true);
              }
            });
          });
        });
    }).then((response) => {
      if (next) {
        skip += take;
      } else {
        skip -= take;
      }

      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }).then((response) => {
    showLoading(false);
  });
};

*/
