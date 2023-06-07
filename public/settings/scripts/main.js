
const saveSettingsButton = document.querySelector("#save-settings");
const inputs = document.querySelectorAll("input[data-ukey]");
const resultUrl = document.querySelector("#result-url");

let userData = JSON.parse(localStorage.getItem("user-data")) ?? {};

update();

function update() {
    for (const input of inputs) {
        input.value = userData[input.dataset.ukey] ?? "";
    }
}

function save() {
    if (!document.forms.settings.checkValidity()) return;

    for (const input of inputs) {
        userData[input.dataset.ukey] = input.value;
    }

    userData.mapel_full = `H${userData.ujian_day_num}J${userData.mapel_num} ${userData.mapel} (AAT 2022-2023)`;
    userData.name_full = `${userData.class}-${userData.absen} ${userData.name}`;

    const stringifiedUserData = JSON.stringify(userData);

    localStorage.setItem("user-data", stringifiedUserData);
}

saveSettingsButton.addEventListener("click", () => save());