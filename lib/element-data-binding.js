
import lodash from "https://esm.run/lodash@4";
import { formatDate } from "./date-format.js";

/** @param {HTMLElement} element */
export function reloadDataBindingNested(element) {
    reloadDataBinding(element);

    for (const elem of element.children) {
        reloadDataBindingNested(elem);
    }
}

/** @param {HTMLElement} element */
export function reloadDataBinding(element) {
    const attrs = element.getAttributeNames();

    for (const attr of attrs) {
        if (attr[0] == "$") {
            const dataBindingPath = element.getAttribute(attr);
            let dataBindingValue = lodash.get(globalThis, dataBindingPath, dataBindingPath);

            if (dataBindingValue instanceof Date) {
                dataBindingValue = formatDate(dataBindingValue);
            }

            if (attr == "$text") {
                element.textContent = dataBindingValue;
            }
            else {
                element[attr.slice(1)] = dataBindingValue;
            }
        }
    }

    return element;
}