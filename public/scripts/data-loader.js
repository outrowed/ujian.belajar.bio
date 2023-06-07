

import { loadUserData } from "./user-data";

const user_data = loadUserData() ?? {
    name: "John Doe",
    name_full: "X-5 John Doe",
    email: "john-doe@example.com",
    date: new Date().toISOString(),
    mapel: "Biologi",
    mapel_full: "H1J1 Biologi Kelas 10 (AAT 2022-2023)",
    max_attempts: 1,
    mapel_num: 1,
    ujian_day_num: 1,
    opened_time: "7:00",
    closed_time: "8:30",
    submitted_time: "7:30",
    is_null: true
};

if (user_data.is_null == null) {
    alert(`Please configure your profile at https://${window.location.hostname}/settings`);
}

function convertTimeToDate(time) {
    if (!time.includes(":")) return new Date(time);

    const date = new Date();
    const [hour, minute] = time.split(":");

    date.setHours(hour);
    date.setMinutes(minute);

    return date;
}

function formatDateToString(date) {
    const localeDateString = date.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
    });

    let formattedDate = localeDateString.replace(/,/g, "").split(" ");
    formattedDate = [
        formattedDate[0], ",",
        formattedDate[2], formattedDate[1], formattedDate[3], ",",
        formattedDate[5], formattedDate[6]
    ].join(" ").replace(/ ,/g, ",");

    return formattedDate;
}

const convertToDateKeys = ["date", "opened_time", "closed_time", "submitted_time"];
const dataUKeyElements = document.querySelectorAll("[data-ukey]");

for (const el of dataUKeyElements) {
    if (convertToDateKeys.includes(el.dataset.ukey)) {
        el.textContent = formatDateToString(convertTimeToDate(user_data[el.dataset.ukey]));
    }
    else {
        el.textContent = user_data[el.dataset.ukey];
    }
}