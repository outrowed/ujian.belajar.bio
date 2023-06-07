
export function loadUserData() {
    return JSON.parse(localStorage.getItem("user-data"));
}

export function saveUserData(userData) {
    userData.mapel_full = `H${userData.ujian_day_num}J${userData.mapel_num} ${userData.mapel} (AAT 2022-2023)`;
    userData.name_full = `${userData.class}-${userData.absen} ${userData.name}`;

    localStorage.setItem("user-data", JSON.stringify(userData));
}