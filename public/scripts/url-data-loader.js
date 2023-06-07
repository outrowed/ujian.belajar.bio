
import { saveUserData } from "./user-data.js";

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has("data")) {
    saveUserData(atob(urlParams.get("data")));
}