
const encodeUrlOutput = document.querySelector("#encode-url-output");
const encodeUrlButton = document.querySelector("#encode-url-btn");
const copyUrlButton = document.querySelector("#encode-url-copy-btn");
const gotoUrlButton = document.querySelector("#encode-url-goto-btn");
const inputs = document.querySelectorAll("input[data-ukey]");

const urlParams = new URLSearchParams();

encodeUrlButton.addEventListener("click", () => {
    for (const input of inputs) {
        urlParams.set(input.dataset.ukey, input.value);
    }
    
    const mainpagePath = window.location.pathname.split("/").slice(0, -2).join("/") + "/";

    encodeUrlOutput.value = `${window.location.origin}/${mainpagePath}/?${urlParams}`;
});

copyUrlButton.addEventListener("click", () => {
    navigator.clipboard.writeText(encodeUrlOutput.value);
});

gotoUrlButton.addEventListener("click", () => {
    window.location.href = encodeUrlOutput.value;
});