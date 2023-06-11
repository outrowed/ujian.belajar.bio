
const burger = document.querySelector("#burger");
const drawer = document.querySelector("#drawer");
const homeButton = document.querySelector("#home-button");

burger.addEventListener("click", () => {
    drawer.hidden = !drawer.hidden;
});