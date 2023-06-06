
const urlParams = new URLSearchParams(window.location.search);

for (const [key, value] of urlParams.entries()) {
    if (key == "submitted") continue;
    const elems = document.querySelectorAll(`[urlkey="${key}"]`);

    for (const el of elems) {
        el.textContent = value;
    }
}