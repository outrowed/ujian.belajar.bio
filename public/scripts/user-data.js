
export function loadUserData() {
    const strUserData = localStorage.getItem("user-data");

    try {
        return JSON.parse(strUserData);
    }
    catch (err) {
        localStorage.removeItem("user-data");
        return {};
    }    
}

export function saveUserData(userData) {
    if (userData.mapel) {
        userData.mapel_full = `H${userData.ujian_day_num}J${userData.mapel_num} ${userData.mapel} Kelas 10 (AAT 2022-2023)`;
    }
    if (userData.name) {
        userData.name_full = `${userData.class}-${userData.absen} ${userData.name}`;
    }

    const mergedUserData = { ...loadUserData(), ...userData };

    localStorage.setItem("user-data", JSON.stringify(mergedUserData));
}