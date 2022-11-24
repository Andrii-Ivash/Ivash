// const div = document.querySelector("div");
// console.log(div);
// console.dir(div);

// const titles = document.querySelectorAll("h1");
// console.log(titles[0]);

// titles[1].innerHTML = "Title2";
// console.log(titles[1]);

// const content = document.getElementsByClassName("content");
// const content = document.getElementsByTagName("div");
// console.log(content);

// const info = document.getElementsByClassName("info");
// const p = document.getElementsByTagName("p");
// console.log(info);
// console.log(p);

// const byId = document.getElementById("content");
// console.log(byId);

// const titleId = document.getElementById("content-title");
// console.log(titleId);

// const byId1 = document.querySelector("#content");
// console.log(byId1);

// const content = document.querySelector("#content");
// content.style.backgroundColor = "purple";
// content.style.color = "white";
// content.style.padding = "10px";
// content.style.border = "5px solid black";

const title = document.querySelector("#content-title");
title.style.color = "yellow";
title.style.textAlign = "center";
title.style.fontSize = "48px";

const info = document.querySelector("#info");
info.style.textAlign = "center";
info.style.fontSize = "36px";

// const content = document.getElementById("content").style.cssText =
// "background-color: purple; color:white; padding: 10px; border: 5px solid black;";

document.querySelector("body").style.cssText = "background-color: black;";

document.querySelector("#content").style.cssText = "color:white;";

// document.querySelector(".btn").style.cssText =
// "color:red; background-color:gold; position:absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); font-size:24px; padding: 10px; border-radius: 10px; cursor:pointer;";

// const btn = document.querySelector(".btn");
// btn.setAttribute(
//     "style",
//     "color:red; background-color:gold; position:absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); font-size:36px; padding: 20px; border-radius: 10px; cursor:pointer;"
// );

const body = document.body;
const button = document.createElement("button");

button.textContent = "Click me";

button.setAttribute(
  "style",
  "color:red; background-color:gold; position:absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); font-size:36px; padding: 20px; border-radius: 10px; cursor:pointer;"
);

body.appendChild(button);



button.addEventListener("click", function () {
    button.style.backgroundColor = "pink";
    button.style.color = "blue";
});


