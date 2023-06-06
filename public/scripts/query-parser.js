
const urlParams = new URLSearchParams(window.location.search);

const {
    mapel,
    accname,
    mattempts,
    btime,
    etime,
    stime,
    timelimit
} = Object.fromEntries(urlParams.entries());


for (const [key, value] of urlParams.entries()) {
    const elems = document.querySelectorAll(`[urlq="${key}"]`);

    for (const el of elems) {
        el.textContent = value;
    }
}