console.log("JS Loaded");

function createDiv(width, height, text) {

    const div = document.createElement("div");

    div.style.width = width + "px";
    div.style.height = height + "px";

    div.textContent = text;

    div.classList.add("created-div");

    const container = document.getElementById("container");

    container.appendChild(div);
}

window.createDiv = createDiv;