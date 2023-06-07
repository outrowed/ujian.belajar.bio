
import { loadUserData, saveUserData } from "../../scripts/user-data.js";

const saveSettingsButton = document.querySelector("#save-user");
const inputs = document.querySelectorAll("input[data-ukey]");

let userData = loadUserData() ?? {};

for (const input of inputs) {
    input.value = userData[input.dataset.ukey] ?? "";
}

saveSettingsButton.addEventListener("click", () => {
    if (!document.forms.settings.checkValidity()) return;

    for (const input of inputs) {
        userData[input.dataset.ukey] = input.value;
    }

    saveUserData(userData);
});