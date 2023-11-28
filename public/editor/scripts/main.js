
import entries from "../lib/entries.js";
import { loadData } from "./load-save.js";
import { createOptionEntry } from "./settings.js";

const optionEntries = document.querySelector(".option-entries");

for (const [key, val] of Object.entries(entries)) {
    const optionEntry = createOptionEntry(key, val);
    optionEntries.appendChild(optionEntry);
}

const urlOutput = document.querySelector("#url-output");
const createUrl = document.querySelector("#btn-create-url");
const copyUrl = document.querySelector("#btn-copy-url");

createUrl.addEventListener("click", () => {
    const data = loadData();
    const searchParams = new URLSearchParams(data);
    const url = `${window.location.origin}/?${searchParams}`;

    urlOutput.value = url;
});

copyUrl.addEventListener("click", () => {
    navigator.clipboard.writeText(urlOutput.value);
});