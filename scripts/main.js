let myImage = document.querySelector("img");
myImage.onclick =  function refreshLo () {
    let mySrc = myImage.getAttribute("src");
if (mySrc === "images/logo.png") {
myImage.setAttribute("src", "images/kita.png");
} else {
    myImage.setAttribute("src", "images/kita.png");
}
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("Пожалуйста, введите имя бренда");
    localStorage.setItem("name", myName);
    myHeading.textContent = myName + ", нихуя у вас говно репутация, вы точно по адресу";
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = storedName + ", нихуя у вас говно репутация, вы точно по адресу";
}
myButton.onclick = function () {
    setUserName();
};