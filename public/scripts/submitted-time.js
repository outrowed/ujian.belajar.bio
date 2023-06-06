
const urlParams = new URLSearchParams(window.location.search);
const overload = urlParams.get("submitted-overload") == "true";

if (overload) localStorage.setItem("last-submitted-time", null);

if (localStorage.getItem("last-submitted-time") == null) {
    localStorage.setItem("last-submitted-time", Date.now());
}

const lastSubmittedTime = new Date(parseInt(localStorage.getItem("last-submitted-time")));

const itlLocale = lastSubmittedTime.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
});
let wLocale = itlLocale;

wLocale = itlLocale.replace(/,/g, "").split(" ");
wLocale = [wLocale[0], ",", wLocale[2], wLocale[1], wLocale[3], ",", wLocale[5], wLocale[6]].join(" ").replace(/ ,/g, ",");

for (const el of document.querySelectorAll("[urlkey='submitted']")) {
    el.textContent = wLocale;
}