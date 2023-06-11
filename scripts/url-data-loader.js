
import { saveUserData } from "./user-data.js";

const urlParams = new URLSearchParams(window.location.search);

saveUserData(Object.fromEntries(urlParams.entries()));