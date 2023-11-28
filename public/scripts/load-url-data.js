
import lodash from "https://esm.run/lodash@4";
import { getDateFromDashedDate } from "../lib/date-format.js";

/** @type {import("./ui-data.ts").UIData} */
const defaultValues = {
    course: {

    },
    date: {},
    user: {},
    attemptsAllowed: 1,
    timeLimit: "10:10",
};

const searchParams = new URLSearchParams(window.location.search).entries();

for (const [k, v] of searchParams) {
    if (v.startsWith("date:")) {
        lodash.set(window, k, getDateFromDashedDate(v));
    }
    else {
        lodash.set(window, k, v);
    }
}

if (window.ui != undefined) {
    if (ui.date && ui.date.quizOpened && ui.date.quizClosed) {
        const hour = ui.date.quizClosed.getHours() - ui.date.quizOpened.getHours();
        const minute = ui.date.quizClosed.getMinutes() - ui.date.quizOpened.getMinutes();

        ui.timeLimit = `${hour} hours ${minute} mins`;
    }

    if (ui.course && ui.course) {
        ui.course.fullName = `${ui.course.prefix} ${ui.course.name} ${ui.course.postfix}`;
        ui.user.fullnameWithClass = `${ui.user.class}-${ui.user.absen} ${ui.user.fullName}`;
    }
}