import { getDateFromISO } from "../../lib/date-format.js";

export function saveData(dump) {
    const serialized = JSON.stringify(dump);

    localStorage.setItem("ui_data", serialized);
}

export function loadData() {
    return JSON.parse(localStorage.getItem("ui_data") ?? "{}");
}

export function setEntry(entry, value) {
    const data = loadData();
    if (value instanceof Date) {
        data[entry] = `dateiso:${value.toISOString()}`;
    }
    else {
        data[entry] = value;
    }
    saveData(data);
}

export function getEntry(entry) {
    const data = loadData();
    
    if (data[entry]?.startsWith("dateiso:")) {
        return getDateFromISO(data[entry]);
    }

    return data[entry];
}