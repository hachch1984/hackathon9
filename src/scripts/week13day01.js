let skip = 0;
let take = 28;
const bnPrevious = () => {
    generalRequest(false);
};
const bnNext = () => {
    generalRequest(true);
};
const showLoading = (show) => {
    let img = document.getElementById("img");
    img.src = show ? "./images/gifLoading1.gif" : "./images/noImage.png";
};
const generalRequest = (next) => {
    if (next === false && skip < 0) {
        return;
    }
    showLoading(true);
    let ul = document.getElementById("ul");
    ul.innerHTML = "";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://pokeapi.co/api/v2/pokemon?limit=${take}&offset=${skip + 1}`);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status == 200) {
            let data = JSON.parse(xhr.response).results;
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
                    let data2 = JSON.parse(xhr2.response);
                    img.src = data2.sprites.front_default;
                };
            });
        }
    };
    if (next)
        skip += take;
    else {
        skip -= take;
    }
    showLoading(false);
    console.log(skip);
};
generalRequest(true);
//# sourceMappingURL=week13day01.js.map