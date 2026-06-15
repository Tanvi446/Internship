const text = document.getElementById("text-container");

const colorBox = document.getElementById("colorbox");
const colorButton = document.getElementById("colorchange");

const fontSizeSlider = document.getElementById("fontsize");

const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const boldBtn = document.getElementById("bold");

const fontList = document.getElementById("list");

const getStyleBtn = document.getElementById("getstyle");
const cssProps = document.getElementById("css-props");


// Change Text Color

colorButton.addEventListener("click", function () {
    text.style.color = colorBox.value;
});


// Change Font Size

fontSizeSlider.addEventListener("input", function () {
    text.style.fontSize = fontSizeSlider.value + "px";
});


// Toggle Italic

italicBtn.addEventListener("click", function () {

    if (text.style.fontStyle === "italic") {
        text.style.fontStyle = "normal";
    } else {
        text.style.fontStyle = "italic";
    }
});


// Toggle Underline

underlineBtn.addEventListener("click", function () {

    if (text.style.textDecoration === "underline") {
        text.style.textDecoration = "none";
    } else {
        text.style.textDecoration = "underline";
    }
});


// Toggle Bold

boldBtn.addEventListener("click", function () {

    if (text.style.fontWeight === "bold") {
        text.style.fontWeight = "normal";
    } else {
        text.style.fontWeight = "bold";
    }
});


// Change Font Family

fontList.addEventListener("change", function () {
    text.style.fontFamily = fontList.value;
});


// Display CSS Properties

getStyleBtn.addEventListener("click", function () {

    cssProps.textContent =
        "color: " + (text.style.color || "black") + "; " +
        "font-size: " + (text.style.fontSize || "55px") + "; " +
        "font-family: " + (text.style.fontFamily || "sans-serif") + "; " +
        "text-decoration: " + (text.style.textDecoration || "none") + "; " +
        "font-style: " + (text.style.fontStyle || "normal") + "; " +
        "font-weight: " + (text.style.fontWeight || "normal") + ";";
});