
export function convertTimeToDate(time) {
    if (!time.includes(":")) return new Date(time);

    const date = new Date();
    const [hour, minute] = time.split(":");

    date.setHours(hour);
    date.setMinutes(minute);

    return date;
}

export function formatDateToString(date) {
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
