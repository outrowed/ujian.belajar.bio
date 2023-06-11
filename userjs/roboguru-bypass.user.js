// ==UserScript==
// @name         Roboguru Bypass
// @description  bypass roboguru ruangguru
// @version      1.0.0
// @namespace    outrowed.github.io
// @author       outrowed
// @match        *://roboguru.ruangguru.com/*
// @grant        GM_addStyle
// @license      MIT
// ==/UserScript==

GM_addStyle(`
    .css-1c77zrq, .css-ujz8lb {
        display: none;
    }

    .question-content, .css-1fioykh {
        mask-image: none !important;
        max-height: none !important;
        pointer-events: auto !important;
    }
`);