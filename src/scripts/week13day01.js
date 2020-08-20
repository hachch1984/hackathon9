let skip = 0;
let take = 28;
const bnPrevious = () => {
    generalRequest(false);
};
const bnNext = () => {
    generalRequest(true);
};
const getSrcNoImage = () => {
    return;
};
const showLoading = (show) => {
    let img = document.getElementById("img");
    img.src = show
        ? "./images/gifLoading1.gif?" + Math.random()
        : "./images/noImage.png";
};
const generalRequest = (next) => {
    console.log("start", new Date());
    if (next === false && skip < 0) {
        return;
    }
    new Promise((resolve, reject) => {
        showLoading(true);
        let ul = document.getElementById("ul");
        ul.innerHTML = "";
        let cont = 0;
        new Promise((resolvePokemon, rejectPokemon) => {
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=${take}&offset=${skip + 1}`)
                .then((response) => response.json())
                .then((data) => {
                let arr = data.results;
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
                            .then((obj) => {
                            resolveImage(obj.sprites.front_default);
                        });
                    }).then((response) => {
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
            }
            else {
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
generalRequest(true);
//# sourceMappingURL=week13day01.js.map